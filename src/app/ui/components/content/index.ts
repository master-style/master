import { Element, Attr } from '@element';
import debounce from 'lodash/debounce';
import css from './index.scss';

const NAME = 'content';

const
    SCROLL_KEY = 'scroll',
    OFFSET_KEY = 'scroll',
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
export class MasterList extends HTMLElement {

    template = $(() => [
        'slot', {
            $created: (element: HTMLElement) => {
                this.scrollWrap = element;
                console.log('wrap');
            }
        },
        'm-bar', {
            part: 'x',
            hidden: !this.scrolling,
            $if: this.scrollX,
            $css: { padding: this.barPadding },
            $created: (element: HTMLElement) => this.barX = element
        }, [
            'm-thumb', {
                $created: (element: HTMLElement) => this.thumbX = element
            }
        ],
        'm-bar', {
            part: 'y',
            hidden: !this.scrolling,
            $if: this.scrollY,
            $css: { padding: this.barPadding },
            $created: (element: HTMLElement) => this.barY = element
        }, [
            'm-thumb', {
                $created: (element: HTMLElement) => this.thumbY = element
            }
        ]
    ]);

    render() {
        this.template.render(this.shadowRoot);
        this.renderPartly();
    }

    scrollWrap: HTMLElement;
    barX: any;
    barY: any;
    thumbY: any;
    thumbX: any;

    #timeX: number;
    #timeY: number;
    #thumbSizeX: number;
    #thumbSizeY: number;
    #sizeX: number;
    #sizeY: number;
    #wrapSizeX: number;
    #wrapSizeY: number;
    #scrollSizeX: number;
    #scrollSizeY: number;

    #scrollEndTimeout: any;

    maxX: number;
    maxY: number;

    scrolling = false;

    #animationFrame: any;

    @Attr({ reflect: false, render: false })
    duration: number = 300;

    @Attr()
    center: boolean;

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

    @Attr({ reflect: false })
    barPadding = 4;

    onConnected() {
        this.scrollWrap.on('scroll', (event: any) => {
            console.log('scroll')
            if (!this.renderPartly()) return;
            if (!this.scrolling) {
                this.scrolling = true;
                this.render();
            }
            if (this.#scrollEndTimeout) this.#scrollEndTimeout = clearTimeout(this.#scrollEndTimeout);
            this.#scrollEndTimeout = setTimeout(() => {
                this.stopScrolling();
            }, 100);
        }, {
            id: 'scroll',
            passive: true
        });

        window.on('resize', debounce(() => {
            this.renderPartly();
        }, 70), {
            id: this
        });
    }

    get scrollable(): boolean {
        return this.scrolling || !!(this.maxX || this.maxY);
    }

    to(to: any, duration?: any, complete?: any) {
        if (!this.scrollable) return;

        to = { X: null, Y: null };

        if (to instanceof HTMLElement) {
            // change by element
            const element = to;
            const
                calc = (dir: string) => {
                    to[dir] = element[OFFSET_POSITION_KEY[dir]];
                    if (this.center) {
                        const
                            elementSize = element[CLIENT_SIZE_KEY[dir]],
                            offsetSize = this.scrollWrap[OFFSET_SIZE_KEY[dir]],
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
                    const current = this.scrollWrap[SCROLL_POSITION_KEY[dir]];
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
            this.#timeX = this.#timeY = 0;
        }

        if (duration === 0) {
            if (this.scrollX && to.X) this.scrollWrap.scrollLeft = to.X;
            if (this.scrollY && to.Y) this.scrollWrap.scrollTop = to.Y;
        } else {
            duration = duration || this.duration;
            this.scrolling = true;
            const scroll = (dir: string, currentValue: number, toValue: number) => {
                this['#time' + dir] += 20;
                const newValue =
                    (function (t, b, c, d) {
                        t = (t /= d) * .5;
                        return Math.round(b + c * t);
                    })(this['#time' + dir], currentValue, toValue - currentValue, duration);
                if (currentValue !== Math.round(toValue)) {
                    this.scrollWrap[SCROLL_POSITION_KEY[dir]] = newValue;
                    this.#animationFrame = requestAnimationFrame(() => scroll(dir, newValue, toValue));
                } else {
                    this.scrolling = false;
                    if (complete) complete();
                }
            };
            if (this.scrollX && to.X) scroll('X', this.scrollWrap[SCROLL_POSITION_KEY.X], to.X);
            if (this.scrollY && to.Y) scroll('Y', this.scrollWrap[SCROLL_POSITION_KEY.Y], to.Y);
        }
    }

    private renderPartly() {
        const render = (dir: string) => {
            if (this['scroll' + dir]) {
                const
                    scrollSize = this['#scrollSize' + dir] = this.scrollWrap[SCROLL_SIZE_KEY[dir]],
                    size = this['#size' + dir] = this[CLIENT_SIZE_KEY[dir]],
                    wrapSize = this['#wrapSize' + dir] = this.scrollWrap[CLIENT_SIZE_KEY[dir]],
                    padding = size - wrapSize,
                    scrollPosition = this.scrollWrap[SCROLL_POSITION_KEY[dir]],
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
                    this.scrollWrap.style.webkitMaskImage = this.scrollWrap.style.maskImage = maskImage;
                }

                if (this['reach' + dir] !== reach) this['reach' + dir] = reach;

                const thumb = this['thumb' + dir];

                const
                    barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition);
                const
                    thumbSize = size * size / (scrollSize + padding) - this.barPadding * 2,
                    TRANSLATE = 'translate' + dir;
                thumb.style.transform =
                    TRANSLATE + '(' + barPosition / (maxPosition + size) * size + 'px)';
                if (this['#thumbSize' + dir] !== thumbSize) {
                    this['#thumbSize' + dir] = thumbSize;
                    thumb.style[SIZE_KEY[dir]] = thumbSize + 'px';
                }
                return scrollPosition !== maxPosition;
            } else {
                return false;
            }
        };
        return render('X') || render('Y');
    }

    // stop current animation
    stopScrolling() {
        if (this.#animationFrame) this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
        this.scrolling = false;
        this.#timeX = this.#timeY = 0;
        this.render();
    }

    onDisconnected() {
        this.scrollWrap.off({ id: 'scroll' });
        window.off({ id: this });
    }

}
