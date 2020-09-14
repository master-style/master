import { Element, Attr } from '@element';
import debounce from 'lodash/debounce';
import css from './index.scss';

console.log(debounce);

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
    template = $(() => {
        return [
            'slot',
            'm-bar', { part: 'x', $if: this.scrollX }, [
                'm-thumb'
            ],
            'm-bar', { part: 'y', $if: this.scrollY }, [
                'm-thumb'
            ]
        ]
    });

    render() {
        this.template.render(this.shadowRoot);
        const nodes = this.template.nodes;
        this.wrap = nodes[0].element;
        if (this.scrollX) {
            this.barX = nodes[1].element;
            this.cueX = nodes[1].children[0].element;
        }
        if (this.scrollY) {
            this.barY = nodes[2].element;
            this.cueY = nodes[2].children[0].element;
        }
    }

    wrap: any;
    barX: any;
    barY: any;
    cueY: any;
    cueX: any;

    private accTime = { x: null, y: null };
    #cueSize = { x: null, y: null };
    private size = { x: null, y: null };
    private wrapSize = { x: null, y: null };
    private scrollSize = { x: null, y: null };
    scrolling = false;
    private scrollEndTimeout: any;
    max = { x: null, y: null };

    private animationFrame;

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

    // scrollbar(whether: boolean) {
    //     const toggleBar = (dir) => {
    //         const $bar = this['$' + dir + 'Bar'];
    //         if (whether && !$bar && this.hasDir(dir)) {
    //             const that = this;
    //             this.append(
    //                 this['$' + dir + 'Bar'] = $(DIV, { class: 'scrollBar scrollBar:' + dir })
    //                     .on('animationend', function () {
    //                         if (!that.scrolling) this.rmClass('show fadeOut');
    //                     }, { passive: true })
    //                     .css('padding', this.barPadding)
    //                     .append(this['$' + dir + 'Cue'] = $(DIV, { class: 'scrollCue' }))
    //             );
    //         } else if (!whether) {
    //             if ($bar) this['$' + dir + 'Bar'] = $bar.remove();
    //         }
    //     }
    //     toggleBar('x');
    //     toggleBar('y');
    // }

    @Attr({ reflect: false })
    barPadding = 4;

    onConnected() {
        this.wrap.on('scroll', (event: any) => {
            if (!this.renderBy('x') && !this.renderBy('y')) return;
            if (!this.scrolling) {
                this.scrolling = true;
                if (this.barX) this.barX.addClass('show').rmClass('fadeOut');
                if (this.barY) this.barY.addClass('show').rmClass('fadeOut');
            }
            if (this.scrollEndTimeout) this.scrollEndTimeout = clearTimeout(this.scrollEndTimeout);
            this.scrollEndTimeout = setTimeout(() => {
                this.stop();
            }, 100);
        }, {
            id: 'scroll',
            passive: true
        });

        window.on('resize', debounce(() => {
            this.renderPart();
        }, 70), {
            id: this
        });

        this.renderPart();
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
            if (this.animationFrame) this.animationFrame = cancelAnimationFrame(this.animationFrame);
            this.accTime = { x: 0, y: 0 };
        }

        if (duration === 0) {
            if (to.x) this.wrap.scrollLeft = to.x;
            if (to.y) this.wrap.scrollTop = to.y;
        } else {
            duration = duration || this.duration;
            this.scrolling = true;
            const scroll = (dir: string, currentValue: number, toValue: number) => {
                this.accTime[dir] += 20;
                const newValue = linear(this.accTime[dir], currentValue, toValue - currentValue, duration);
                if (currentValue !== Math.round(toValue)) {
                    this.wrap[SCROLL_POSITION_KEY[dir]] = newValue;
                    this.animationFrame = requestAnimationFrame(() => scroll(dir, newValue, toValue));
                } else {
                    this.scrolling = false;
                    if (complete) complete();
                }
            }
            if (to.x) scroll('x', this.wrap[SCROLL_POSITION_KEY.x], to.x);
            if (to.y) scroll('y', this.wrap[SCROLL_POSITION_KEY.y], to.y);
        }
    }

    renderPart() {
        if (this.scrollX) this.renderBy('x');
        if (this.scrollY) this.renderBy('y');
    }

    private renderBy(dir: string) {
        const isX = dir === 'x';
        const isY = dir === 'y';
        if (isX && this.scrollX || isY && this.scrollY) {
            const
                scrollSize = this.scrollSize[dir] = this.wrap[SCROLL_SIZE_KEY[dir]],
                size = this.size[dir] = this[CLIENT_SIZE_KEY[dir]],
                wrapSize = this.wrapSize[dir] = this.wrap[CLIENT_SIZE_KEY[dir]],
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
                this.wrap.css({
                    maskImage,
                    webkitMaskImage: maskImage
                });
            }

            if (isX && this.reachX !== reach) this.reachX = reach;
            if (isY && this.reachY !== reach) this.reachY = reach;

            const cue = isX ? this.cueX : this.cueY;

            const
                barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition);
            const
                cueSize = size * size / (scrollSize + padding) - this.barPadding * 2,
                Dir = isX ? 'X' : 'Y',
                TRANSLATE = 'translate' + Dir;
            cue.style.transform =
                TRANSLATE + '(' + barPosition / (maxPosition + size) * size + 'px)';
            if (this.#cueSize[dir] !== cueSize) {
                this.#cueSize[dir] = cueSize;
                cue.style[isX ? 'width' : 'height'] = cueSize + 'px';
            }
            return scrollPosition !== maxPosition;
        } else {
            return false;
        }
    }

    // stop current animation
    stop() {
        console.log('stop');
        if (this.animationFrame) this.animationFrame = cancelAnimationFrame(this.animationFrame);
        this.scrolling = false;
        this.accTime = { x: 0, y: 0 };
        if (!this.disableScrollbar) {
            if (this.barX) this.barX.addClass('fadeOut');
            if (this.barY) this.barY.addClass('fadeOut');
        }
    }

    onDisconnected() {
        this.wrap.off({ id: 'scroll' });
        window.off({ id: this });
    }

}
