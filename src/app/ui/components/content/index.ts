import { Element, Attr } from '@element';
import debounce from 'lodash/debounce';
import css from './index.scss';

const NAME = 'content';

const
    WIDTH_KEY = 'Width',
    HEIGHT_KEY = 'Height',
    SCROLL_SIZE_KEY = { x: 'scrollWidth', y: 'scrollHeight' },
    SCROLL_POSITION_KEY = { x: 'scrollLeft', y: 'scrollTop' },
    OFFSET_POSITION_KEY = { x: 'offsetLeft', y: 'offsetTop' },
    OFFSET_SIZE_KEY = { x: 'offset' + WIDTH_KEY, y: 'offset' + HEIGHT_KEY },
    CLIENT_SIZE_KEY = { x: 'client' + WIDTH_KEY, y: 'client' + HEIGHT_KEY },
    linear = (t, b, c, d): any => {
        t = (t /= d) * .5;
        return Math.round(b + c * t);
    };

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterList extends HTMLElement {

    template = $(() => [
        'slot', {
            $created: (element: HTMLElement) => this.wrap = element
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
        if (this.scrollX) this.renderBy('x');
        if (this.scrollY) this.renderBy('y');
    }

    wrap: any;
    barX: any;
    barY: any;
    thumbY: any;
    thumbX: any;

    #accTime = { x: null, y: null };
    #thumbSize = { x: null, y: null };
    #size = { x: null, y: null };
    #wrapSize = { x: null, y: null };
    #scrollSize = { x: null, y: null };
    #scrollEndTimeout: any;

    scrolling = false;
    max = { x: null, y: null };

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

    @Attr({ reflect: false })
    disableScrollbar: boolean;

    @Attr({ observe: false, render: false })
    reachX: number;

    @Attr({ observe: false, render: false })
    reachY: number;

    @Attr({ reflect: false })
    barPadding = 4;

    onConnected() {
        this.wrap.on('scroll', (event: any) => {
            if (!this.renderBy('x') && !this.renderBy('y')) return;
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
            if (this.scrollX) this.renderBy('x');
            if (this.scrollY) this.renderBy('y');
        }, 70), {
            id: this
        });
    }

    get scrollable(): boolean {
        return this.scrolling ? true : !!(this.max.x || this.max.y);
    }

    to(to: any, duration?: any, complete?: any) {
        if (!this.scrollable) return;

        to = { x: null, y: null };

        if (to instanceof HTMLElement) {
            // change by element
            const element = to;
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
                            to[dir] >= this.max[dir] + centerOffset
                        ) {
                            to[dir] = this.max[dir];
                        } else {
                            to[dir] -= centerOffset;
                        }
                    }
                };
            if (this.scrollX) calc('x');
            if (this.scrollY) calc('y');
        } else {
            const
                calc = (dir: string) => {
                    if (to[dir] > this.max[dir]) {
                        to[dir] = this.max[dir];
                    } else if (to[dir] < 0) {
                        to[dir] = 0;
                    }
                    const current = this.wrap[SCROLL_POSITION_KEY[dir]];
                    if (to[dir] === current) return to[dir] = null;
                };
            if (this.scrollX) calc('x');
            if (this.scrollY) calc('y');
        }

        if (typeof duration === 'function') {
            complete = duration;
            duration = this.duration;
        }

        if (this.scrolling) {
            if (this.#animationFrame) this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
            this.#accTime = { x: 0, y: 0 };
        }

        if (duration === 0) {
            if (to.x) this.wrap.scrollLeft = to.x;
            if (to.y) this.wrap.scrollTop = to.y;
        } else {
            duration = duration || this.duration;
            this.scrolling = true;
            const scroll = (dir: string, currentValue: number, toValue: number) => {
                this.#accTime[dir] += 20;
                const newValue = linear(this.#accTime[dir], currentValue, toValue - currentValue, duration);
                if (currentValue !== Math.round(toValue)) {
                    this.wrap[SCROLL_POSITION_KEY[dir]] = newValue;
                    this.#animationFrame = requestAnimationFrame(() => scroll(dir, newValue, toValue));
                } else {
                    this.scrolling = false;
                    if (complete) complete();
                }
            }
            if (to.x) scroll('x', this.wrap[SCROLL_POSITION_KEY.x], to.x);
            if (to.y) scroll('y', this.wrap[SCROLL_POSITION_KEY.y], to.y);
        }
    }

    private renderBy(dir: string) {
        const isX = dir === 'x';
        const isY = dir === 'y';
        if (isX && this.scrollX || isY && this.scrollY) {
            const
                scrollSize = this.#scrollSize[dir] = this.wrap[SCROLL_SIZE_KEY[dir]],
                size = this.#size[dir] = this[CLIENT_SIZE_KEY[dir]],
                wrapSize = this.#wrapSize[dir] = this.wrap[CLIENT_SIZE_KEY[dir]],
                padding = size - wrapSize,
                scrollPosition = this.wrap[SCROLL_POSITION_KEY[dir]],
                maxPosition = this.max[dir] = scrollSize - wrapSize < 0 ? 0 : (scrollSize - wrapSize),
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
                            `linear-gradient(to ${isX ? 'right' : 'bottom'},rgba(0,0,0,0) 0px,rgba(0,0,0,1) ${startGuide}px,rgba(0,0,0,1) ${endGuide}px,rgba(0,0,0,0) ${size}px)` :
                            '';
                this.wrap.style.webkitMaskImage = this.wrap.style.maskImage = maskImage;
            }

            if (isX && this.reachX !== reach) this.reachX = reach;
            if (isY && this.reachY !== reach) this.reachY = reach;

            const thumb = isX ? this.thumbX : this.thumbY;

            const
                barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition);
            const
                thumbSize = size * size / (scrollSize + padding) - this.barPadding * 2,
                Dir = isX ? 'X' : 'Y',
                TRANSLATE = 'translate' + Dir;
            thumb.style.transform =
                TRANSLATE + '(' + barPosition / (maxPosition + size) * size + 'px)';
            if (this.#thumbSize[dir] !== thumbSize) {
                this.#thumbSize[dir] = thumbSize;
                thumb.style[isX ? 'width' : 'height'] = thumbSize + 'px';
            }
            return scrollPosition !== maxPosition;
        } else {
            return false;
        }
    }

    // stop current animation
    stopScrolling() {
        if (this.#animationFrame) this.#animationFrame = cancelAnimationFrame(this.#animationFrame);
        this.scrolling = false;
        this.#accTime = { x: 0, y: 0 };
        this.render();
    }

    onDisconnected() {
        this.wrap.off({ id: 'scroll' });
        window.off({ id: this });
    }

}
