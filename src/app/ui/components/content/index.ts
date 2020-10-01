import { Element, Attr, ToggleableElement } from '@element';
import { debounce } from 'lodash-es';
import css from './index.scss';
import isNum from '@utils/is-num';

const NAME = 'content';
const PX = 'px';

const
    SCROLL_KEY = 'scroll',
    OFFSET_KEY = 'offset',
    WIDTH_KEY = 'Width',
    HEIGHT_KEY = 'Height',
    LEFT_KEY = 'Left',
    TOP_KEY = 'Top',
    SIZE_KEY = { X: 'width', Y: 'height' },
    SCROLL_SIZE_KEY = { X: SCROLL_KEY + WIDTH_KEY, Y: SCROLL_KEY + HEIGHT_KEY },
    SCROLL_POSITION_KEY = { X: SCROLL_KEY + LEFT_KEY, Y: SCROLL_KEY + TOP_KEY },
    OFFSET_POSITION_KEY = { X: OFFSET_KEY + LEFT_KEY, Y: OFFSET_KEY + TOP_KEY },
    OFFSET_SIZE_KEY = { X: OFFSET_KEY + WIDTH_KEY, Y: OFFSET_KEY + HEIGHT_KEY },
    CLIENT_SIZE_KEY = { X: 'client' + WIDTH_KEY, Y: 'client' + HEIGHT_KEY };

@Element({
    tag: 'm-' + NAME,
    css
})
export class ContentElement extends ToggleableElement {

    #time: any = {};
    #thumbSize: any = {};
    #bar: any = {};
    #scrollSize: any = {};
    #scrollEndTimeout: any;
    #animationFrame: any;
    #enabled: boolean;
    #thumb: any = {};

    template = $(() => [
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => {
                this.wrap = element;
            }
        }, [
            'slot'
        ],
        'm-bar', {
            part: 'x',
            hidden: !this.scrolling,
            $if: this.scrollX,
            $created: (element: HTMLElement) => this.#bar.X = element
        }, [
            'm-thumb', {
                $created: (element: HTMLElement) => this.#thumb.X = element
            }
        ],
        'm-bar', {
            part: 'y',
            hidden: !this.scrolling,
            $if: this.scrollY,
            $created: (element: HTMLElement) => this.#bar.Y = element
        }, [
            'm-thumb', {
                $created: (element: HTMLElement) => this.#thumb.Y = element
            }
        ]
    ]);

    wrap: HTMLElement;
    scrolling = false;

    maxX: number;
    maxY: number;

    @Attr()
    hidden: boolean = false;

    @Attr({ reflect: false, render: false })
    duration: number = 300;

    @Attr()
    center: boolean = true;

    @Attr({ reflect: false })
    guide: boolean;

    @Attr({ reflect: false })
    guideSize: number = 48;

    @Attr()
    scrollY: boolean;

    @Attr()
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

    render() {
        this.template.render(this.shadowRoot);
        this.renderOnScroll();
        (this.scrollX || this.scrollY) ? this.enable() : this.disable();
    }

    enable() {
        if (this.#enabled) return;
        this.#enabled = true;
        this.scrolling = false;
        this.wrap
            .on('scroll', (event: any) => {
                if (!this.renderOnScroll()) return;
                if (!this.scrolling) {
                    this.scrolling = true;
                    this.template.render(this.shadowRoot);
                }
                if (this.#scrollEndTimeout) this.#scrollEndTimeout = clearTimeout(this.#scrollEndTimeout);
                this.#scrollEndTimeout = setTimeout(() => {
                    this.stop();
                }, 100);
            }, {
                id: 'scroll',
                passive: true
            })
            .on('slotchange', (event) => {
                this.renderOnScroll();
            }, {
                id: 'scroll',
                passive: true
            });

        window.on('resize', debounce(() => {
            this.renderOnScroll();
        }, 70), {
            id: this
        });
    }

    disable() {
        if (!this.#enabled) return;
        this.#enabled = false;
        this.wrap.off({ id: 'scroll' });
        window.off({ id: this });
    }

    get scrollable(): boolean {
        return this.scrolling || !!(this.maxX || this.maxY);
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
                            offsetSize = this.wrap[OFFSET_SIZE_KEY[dir]],
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
                    const current = this.wrap[SCROLL_POSITION_KEY[dir]];
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
            if (this.#animationFrame) this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
            this.#time.X = this.#time.Y = 0;
        }

        if (duration === 0) {
            if (this.scrollX && isNum(to.X)) this.wrap.scrollLeft = to.X;
            if (this.scrollY && isNum(to.Y)) this.wrap.scrollTop = to.Y;
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
                    this.wrap[SCROLL_POSITION_KEY[dir]] = newValue;
                    this.#animationFrame = requestAnimationFrame(() => scroll(dir, newValue, toValue));
                } else {
                    this.scrolling = false;
                    if (complete) complete();
                }
            };
            if (this.scrollX && isNum(to.X)) scroll('X', this.wrap[SCROLL_POSITION_KEY.X], to.X);
            if (this.scrollY && isNum(to.Y)) scroll('Y', this.wrap[SCROLL_POSITION_KEY.Y], to.Y);
        }
    }

    renderOnScroll() {
        const render = (dir: string) => {
            if (this['scroll' + dir]) {
                const
                    scrollSize = this.#scrollSize[dir] = this.wrap[SCROLL_SIZE_KEY[dir]],
                    size = this[CLIENT_SIZE_KEY[dir]],
                    // tslint:disable-next-line: radix
                    wrapSize = this.wrap[CLIENT_SIZE_KEY[dir]],
                    scrollPosition = this.wrap[SCROLL_POSITION_KEY[dir]],
                    maxPosition = this['max' + dir] = scrollSize - wrapSize < 0 ? 0 : (scrollSize - wrapSize),
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
                    this.wrap.style.webkitMaskImage = this.wrap.style.maskImage = maskImage;
                }

                if (this['reach' + dir] !== reach) this['reach' + dir] = reach;

                const thumb = this.#thumb[dir];

                if (thumb) {
                    const
                        barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition);
                    const
                        barStyles = window.getComputedStyle(this.#bar[dir]),
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
            } else {
                return false;
            }
        };
        return render('X') || render('Y');
    }

    // stop current animation
    stop() {
        if (this.#animationFrame) this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
        this.scrolling = false;
        this.#time.X = this.#time.Y = 0;
        this.render();
    }

    protected onOpened() {
        this.renderOnScroll();
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

        console.log(keyframes);

        this.animation = this.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }

    onRemoved() {
        this.disable();
    }

}
