import { Element, MasterElement, Attr, Event, EventEmitter } from '@master/element';
import { Template } from '@master/template';
import { $ } from '@master/dom';
import { TargetElement } from '../../shared/target';
import css from './content.scss';
import isNum from '../../utils/is-num';
import debounce from '../../utils/debounce';

declare const ResizeObserver: any

const NAME = 'content';
const PX = 'px';
const $window = $(window);
const $body = $(document.body);

const
    SCROLL_KEY = 'scroll',
    OFFSET_KEY = 'offset',
    WIDTH_KEY = 'Width',
    HEIGHT_KEY = 'Height',
    LEFT_KEY = 'Left',
    TOP_KEY = 'Top',
    SIZE_KEY = { X: 'width', Y: 'height' },
    POSITION_KEY = { X: 'x', Y: 'y' },
    SCROLL_SIZE_KEY = { X: SCROLL_KEY + WIDTH_KEY, Y: SCROLL_KEY + HEIGHT_KEY },
    SCROLL_POSITION_KEY = { X: SCROLL_KEY + LEFT_KEY, Y: SCROLL_KEY + TOP_KEY },
    OFFSET_POSITION_KEY = { X: OFFSET_KEY + LEFT_KEY, Y: OFFSET_KEY + TOP_KEY },
    OFFSET_SIZE_KEY = { X: OFFSET_KEY + WIDTH_KEY, Y: OFFSET_KEY + HEIGHT_KEY },
    CLIENT_SIZE_KEY = { X: 'client' + WIDTH_KEY, Y: 'client' + HEIGHT_KEY };


@Element('m-' + NAME)
export class ContentElement extends TargetElement {
    static css = css;

    #time: any = {};
    #thumbSize: any = {};
    #bar: any = {};
    #scrollSize: any = {};
    #scrollEndTimeout: any;
    #animationFrame: any;
    #enabled: boolean;
    #thumb: any = {};
    #lastMorePosition: number = 0;

    template = new Template(() => [
        'slot', {
            part: 'root',
            $created: (element: MasterElement) => this.root = element
        },
        'slot', {
            name: 'part'
        },
        'm-bar', {
            part: 'x',
            hidden: !this.scrolling,
            $if: this.scrollX,
            $created: (element: MasterElement) => this.#bar.X = element
        }, [
            'm-thumb', {
                $created: (element: MasterElement) => this.#thumb.X = element
            }
        ],
        'm-bar', {
            part: 'y',
            hidden: !this.scrolling,
            $if: this.scrollY,
            $created: (element: MasterElement) => this.#bar.Y = element
        }, [
            'm-thumb', {
                $created: (element: MasterElement) => this.#thumb.Y = element
            }
        ]
    ]);

    root: MasterElement;
    scrolling = false;

    maxX: number;
    maxY: number;

    x = 0;
    y = 0;

    @Event()
    moreEmitter: EventEmitter;

    @Event()
    changeEmitter: EventEmitter;

    @Event()
    scrollEmitter: EventEmitter;

    @Event()
    scrollStartEmitter: EventEmitter;

    @Event()
    scrollEndEmitter: EventEmitter;

    @Attr({ reflect: false, render: false })
    duration: number = 300;

    @Attr({ reflect: false, render: false })
    emit: boolean = false;

    @Attr()
    center: boolean = true;

    @Attr({ reflect: false })
    guide: boolean;

    @Attr({ reflect: false })
    guideSize: number = 48;

    @Attr({ reflect: false, render: false })
    page = 0;

    @Attr({
        onUpdate(content) {
            (content.scrollX || content.scrollY) ? content.enable() : content.disable();
        }
    })
    scrollY: boolean;

    @Attr({
        onUpdate(content) {
            (content.scrollX || content.scrollY) ? content.enable() : content.disable();
        }
    })
    scrollX: boolean;

    @Attr()
    overscroll: boolean;

    @Attr({ observe: false, render: false })
    reachX: number;

    @Attr({ observe: false, render: false })
    reachY: number;

    @Attr()
    name: string;

    @Attr()
    collapseX: boolean = false;

    @Attr()
    collapseY: boolean = false;

    #resizeObserver;

    render() {
        this.template.render(this.shadowRoot);
        this.renderScroll();
    }

    enable() {
        if (this.#enabled) return;
        this.#enabled = true;
        this.scrolling = false;
        this.root
            .on('scroll', (event: any) => {
                if (!this.renderScroll()) return;
                if (!this.scrolling) {
                    this.scrolling = true;
                    this.template.render(this.shadowRoot);
                    this.scrollStartEmitter();
                }
                this.scrollEmitter();
                if (this.#scrollEndTimeout) {
                    this.#scrollEndTimeout = clearTimeout(this.#scrollEndTimeout);
                }
                this.#scrollEndTimeout = setTimeout(() => {
                    if (this.#animationFrame) {
                        this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
                    }
                    this.scrolling = false;
                    this.#time.X = this.#time.Y = 0;
                    this.template.render(this.shadowRoot);
                    this.scrollEndEmitter();
                }, 100);
            }, {
                id: [NAME],
                passive: true
            })
            .on('slotchange', (event) => {
                this.renderScroll();
                this.changeEmitter();
            }, {
                id: [NAME],
                passive: true
            });

        this.#resizeObserver = new ResizeObserver(() => {
            this.renderScroll();
        });
        this.#resizeObserver.observe(this.root);

        $window.on('resize', debounce(() => {
            this.renderScroll();
        }, 70), {
            id: [this, NAME]
        });
    }

    disable() {
        if (!this.#enabled) return;
        this.#enabled = false;
        this.root.off({ id: ['scroll'] });
        $window.off({ id: [this, NAME] });
        this.#resizeObserver.unobserve(this);
    }

    get scrollable(): boolean {
        return !!(this.scrollX && this.maxX || this.scrollY && this.maxY);
    }

    to(point: any, duration?: any, complete?: any) {
        if (!this.scrollable) return;
        const to = { X: point.x, Y: point.y };

        if (point instanceof HTMLElement) {
            // change by element
            const element = point;
            const
                calc = (dir: string) => {
                    to[dir] = element[OFFSET_POSITION_KEY[dir]];
                    if (this.center) {
                        const
                            elementSize = element[CLIENT_SIZE_KEY[dir]],
                            offsetSize = this.root[OFFSET_SIZE_KEY[dir]],
                            centerOffset = (offsetSize - elementSize) / 2;
                        if (to[dir] < centerOffset) {
                            to[dir] = 0;
                        } else if (
                            to[dir] >= this['max' + dir] + centerOffset
                        ) {
                            to[dir] = this['max' + dir];
                        } else {
                            to[dir] -= centerOffset;
                        }
                    }
                };
            if (this.scrollX) calc('X');
            if (this.scrollY) calc('Y');
        } else {
            const
                calc = (dir: string) => {
                    if (to[dir] > this['max' + dir]) {
                        to[dir] = this['max' + dir];
                    } else if (to[dir] < 0) {
                        to[dir] = 0;
                    }
                    const current = this[POSITION_KEY[dir]] = this.root[SCROLL_POSITION_KEY[dir]];
                    if (to[dir] === current) return to[dir] = null;
                };
            if (this.scrollX) calc('X');
            if (this.scrollY) calc('Y');
        }

        if (typeof duration === 'function') {
            complete = duration;
            duration = this.duration;
        }

        if (this.scrolling) {
            if (this.#animationFrame) {
                this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
            }
            this.#time.X = this.#time.Y = 0;
        }

        if (duration === 0) {
            if (this.scrollX && isNum(to.X)) this.x = this.root.scrollLeft = to.X;
            if (this.scrollY && isNum(to.Y)) this.y = this.root.scrollTop = to.Y;
        } else {
            duration = duration || this.duration;
            this.scrolling = true;
            const scroll = (dir: string, currentValue: number, toValue: number) => {
                this.#time[dir] += 20;
                const newValue =
                    (function (t, b, c, d) {
                        t = (t /= d) * .5;
                        return Math.round(b + c * t);
                    })(this.#time[dir], currentValue, toValue - currentValue, duration);
                if (currentValue !== Math.round(toValue)) {
                    this[POSITION_KEY[dir]] = this.root[SCROLL_POSITION_KEY[dir]] = newValue;
                    this.#animationFrame = requestAnimationFrame(() => scroll(dir, newValue, toValue));
                } else {
                    this.scrolling = false;
                    if (complete) complete();
                }
            };
            if (this.scrollX && isNum(to.X)) scroll('X', this.x = this.root[SCROLL_POSITION_KEY.X], to.X);
            if (this.scrollY && isNum(to.Y)) scroll('Y', this.y = this.root[SCROLL_POSITION_KEY.Y], to.Y);
        }
    }

    renderScroll() {
        const render = (dir: string) => {
            if (!this['scroll' + dir]) {
                return false;
            }

            const
                scrollSize = this.#scrollSize[dir] = this.root[SCROLL_SIZE_KEY[dir]],
                size = this[CLIENT_SIZE_KEY[dir]],
                // tslint:disable-next-line: radix
                rootSize = this.root[CLIENT_SIZE_KEY[dir]],
                scrollPosition = this[POSITION_KEY[dir]] = this.root[SCROLL_POSITION_KEY[dir]],
                maxPosition = this['max' + dir] = scrollSize - rootSize < 0 ? 0 : (scrollSize - rootSize),
                reach = scrollPosition <= 0 ? -1 : scrollPosition >= maxPosition ? 1 : 0;

            if (this.guide) {
                const
                    guideSize = this.guideSize,
                    startGuide = (scrollPosition < guideSize) ? scrollPosition : guideSize,
                    endGuide = (scrollPosition > maxPosition - guideSize) ?
                        (size + scrollPosition - maxPosition) :
                        (size - guideSize),
                    maskImage =
                        this.scrollable ?
                            `linear-gradient(to ${dir === 'X' ? 'right' : 'bottom'},rgba(0,0,0,0) 0px,rgba(0,0,0,1) ${startGuide}px,rgba(0,0,0,1) ${endGuide}px,rgba(0,0,0,0) ${size}px)` :
                            '';
                // tslint:disable-next-line: deprecation
                this.root.style.webkitMaskImage = this.root.style.maskImage = maskImage;
            }

            if (!this.scrollable) {
                this.to({ x: 0, y: 0 });
                this.#lastMorePosition = 0;
            }

            let morePosition = maxPosition * 2 / 3;

            if (this.#lastMorePosition > 0) {
                morePosition = this.#lastMorePosition + (maxPosition - this.#lastMorePosition) / 2;
            }

            if (
                maxPosition === 0 ||
                scrollPosition >= morePosition && morePosition > this.#lastMorePosition ||
                scrollSize === rootSize
            ) {
                this.#lastMorePosition = morePosition;
                this.page++;
                this.moreEmitter();
            }

            if (this['reach' + dir] !== reach) this['reach' + dir] = reach;

            const thumb = this.#thumb[dir];

            if (thumb) {
                const
                    barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition);
                const
                    barStyles = $window.getComputedStyle(this.#bar[dir]),
                    // tslint:disable-next-line: radix
                    padding = parseInt(barStyles['padding']),
                    // tslint:disable-next-line: radix
                    barSize = parseInt(barStyles[SIZE_KEY[dir]]) - padding * 2,
                    thumbSize = barSize / (maxPosition + barSize) * barSize;
                thumb.style.transform =
                    'translate' + dir + '(' + barPosition / (maxPosition + barSize) * barSize + 'px)';
                if (this.#thumbSize[dir] !== thumbSize) {
                    this.#thumbSize[dir] = thumbSize;
                    thumb.style[SIZE_KEY[dir]] = thumbSize + 'px';
                }
            }
            return scrollPosition !== maxPosition;
        };
        return render('X') || render('Y');
    }

    reset() {
        this.#lastMorePosition = 0;
        this.page = 0;
        this.to({ y: 0 }, 0);
    }

    // stop current animation
    stop() {
        if (this.#animationFrame) {
            this.#animationFrame = cancelAnimationFrame(this.#animationFrame)
        }
        this.scrolling = false;
        this.#time.X = this.#time.Y = 0;
        this.render();
    }

    protected onOpened() {
        this.renderScroll();
    }

    protected toggling(
        options: KeyframeEffectOptions
    ) {

        const keyframes = [];
        const startKeyframe: any = {};
        const endKeyframe: any = {};

        if (this.collapseY || this.collapseX && this.collapseY) {
            startKeyframe.height = 0 + PX;
            endKeyframe.height = this.offsetHeight + PX;
        }

        if (this.collapseX || this.collapseX && this.collapseY) {
            startKeyframe.width = 0 + PX;
            endKeyframe.width = this.offsetWidth + PX;
        }

        if (this.fade) {
            startKeyframe.opacity = 0;
            endKeyframe.opacity = 1;
        }

        if (this.hidden) {
            keyframes.push(endKeyframe, startKeyframe);
        } else {
            keyframes.push(startKeyframe, endKeyframe);
        }

        this.animation = this.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }

    onDisconnected() {
        $body.off({ id: [this, NAME] });
        this.disable();
    }

}
