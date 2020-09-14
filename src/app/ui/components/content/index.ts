import { Element, Attr } from '@element';
import debounce from 'lodash/debounce';
import css from './index.scss';

console.log(debounce);

const NAME = 'content';

const
    hasTouch = 'ontouchstart' in window,
    DIV = 'div',
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
        'slot',
        'm-bar', { part: 'x' }, [
            'm-thumb'
        ],
        'm-bar', { part: 'y' }, [
            'm-thumb'
        ]
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }

    $wrap: any;
    $yBar: any;
    $yCue: any;
    $xBar: any;
    $xCue: any;

    private accTime = { x: null, y: null };
    private cueSize = { x: null, y: null };
    private size = { x: null, y: null };
    private wrapSize = { x: null, y: null };
    private scrollSize = { x: null, y: null };
    scrolling = false;
    private scrollEndTimeout: any;
    reach = { x: null, y: null };
    max = { x: null, y: null };
    ready = false;
    enabled: boolean;

    private animationFrame;

    @Attr({ reflect: false, render: false })
    duration: number = 300;

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

    // scrollbar(whether: boolean) {
    //     const toggleBar = (dir) => {
    //         const $bar = this['$' + dir + 'Bar'];
    //         if (whether && !$bar && this.hasDirection(dir)) {
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
        this.$wrap.on('scroll', (event: any) => requestAnimationFrame(() => {
            if (!this.renderByDirection('x') && !this.renderByDirection('y')) return;
            if (!this.scrolling) {
                this.scrolling = true;
                if (this.$xBar) this.$xBar.addClass('show').rmClass('fadeOut');
                if (this.$yBar) this.$yBar.addClass('show').rmClass('fadeOut');
            }
            if (this.scrollEndTimeout) this.scrollEndTimeout = clearTimeout(this.scrollEndTimeout);
            this.scrollEndTimeout = setTimeout(() => {
                this.stop();
            }, 100);
        }), {
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

    private hasDirection(dir: string) {
        return this.direction === dir || this.direction === 'both';
    }

    to(to: any, duration?: any, complete?: any) {
        if (!this.scrollable) return;

        if (to instanceof HTMLElement) {
            // change by element
            const $element = to;
            to = { x: null, y: null };
            const
                calc = (dir: string) => {
                    if (this.hasDirection(dir)) {
                        to[dir] = $element[OFFSET_POSITION_KEY[dir]];
                        if (this.center) {
                            const
                                elementSize = $element[CLIENT_SIZE_KEY[dir]],
                                offsetSize = this.$wrap[OFFSET_SIZE_KEY[dir]],
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
                    }
                };
            calc('x');
            calc('y');
        } else {
            const
                calc = (dir: string) => {
                    if (this.hasDirection(dir)) {
                        if (to[dir] > this.max[dir]) {
                            to[dir] = this.max[dir];
                        } else if (to[dir] < 0) {
                            to[dir] = 0;
                        }
                        const current = this.$wrap[SCROLL_POSITION_KEY[dir]];
                        if (to[dir] === current) return to[dir] = null;
                    } else {
                        to[dir] = null;
                    }
                };
            calc('x');
            calc('y');
        }

        const changed = { x: $.isNum(to.x), y: $.isNum(to.y) };

        if (!$.isNum(to.x) && !$.isNum(to.y)) return;

        if ($.isFn(duration)) {
            complete = duration;
            duration = this.duration;
        }

        if (this.scrolling) {
            if (this.animationFrame) this.animationFrame = cancelAnimationFrame(this.animationFrame);
            this.accTime = { x: 0, y: 0 };
        }

        if (duration === 0 || duration === false) {
            if (changed.x) this.$wrap.scrollLeft = to.x;
            if (changed.y) this.$wrap.scrollTop = to.y;
        } else {
            duration = duration || this.duration;
            this.scrolling = true;
            const scroll = (dir: string, currentValue: number, toValue: number) => {
                this.accTime[dir] += 20;
                const newValue = linear(this.accTime[dir], currentValue, toValue - currentValue, duration);
                if (currentValue !== Math.round(toValue)) {
                    this.$wrap[SCROLL_POSITION_KEY[dir]] = newValue;
                    this.animationFrame = requestAnimationFrame(() => scroll(dir, newValue, toValue));
                } else {
                    this.scrolling = false;
                    $.cb(complete);
                }
            }
            if (changed.x) scroll('x', this.$wrap[SCROLL_POSITION_KEY.x], to.x);
            if (changed.y) scroll('y', this.$wrap[SCROLL_POSITION_KEY.y], to.y);
        }
    }

    renderPart() {
        this.renderByDirection('x');
        this.renderByDirection('y');
    }

    private renderByDirection(dir: string) {
        if (this.hasDirection(dir)) {
            const
                scrollSize = this.scrollSize[dir] = this.$wrap[SCROLL_SIZE_KEY[dir]],
                size = this.size[dir] = this[CLIENT_SIZE_KEY[dir]],
                wrapSize = this.wrapSize[dir] = this.$wrap[CLIENT_SIZE_KEY[dir]],
                padding = size - wrapSize,
                scrollPosition = this.$wrap[SCROLL_POSITION_KEY[dir]],
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
                            `linear-gradient(to ${dir === 'x' ? 'right' : 'bottom'},rgba(0,0,0,0) 0px,rgba(0,0,0,1) ${startGuide}px,rgba(0,0,0,1) ${endGuide}px,rgba(0,0,0,0) ${size}px)` :
                            '';
                this.$wrap.css({
                    maskImage,
                    webkitMaskImage: maskImage
                });
            }
            if (this.reach[dir] !== reach) {
                this.reach[dir] = reach;
                this.attr('reach-' + dir, reach);
            }
            const
                barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition),
                $bar = this['$' + dir + 'Bar'];
            if ($bar) {
                const
                    cueSize = size * size / (scrollSize + padding) - this.barPadding * 2,
                    Dir = dir.toUpperCase(),
                    TRANSLATE = 'translate' + Dir;
                this['$' + dir + 'Cue'].css(
                    'transform', TRANSLATE + '(' + barPosition / (maxPosition + size) * size + 'px)'
                );
                if (!this.ready || this.cueSize[dir] !== cueSize) {
                    this.cueSize[dir] = cueSize;
                    this['$' + dir + 'Cue'].style[dir === 'x' ? 'width' : 'height'] = cueSize + 'px';
                }
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
            if (this.$xBar) this.$xBar.addClass('fadeOut');
            if (this.$yBar) this.$yBar.addClass('fadeOut');
        }
    }

    onDisconnected() {
        if (this.$xBar) this.$xBar = this.$xBar.remove();
        if (this.$yBar) this.$yBar = this.$yBar.remove();
        this.$wrap.off({ id: 'scroll' });
        window.off({ id: this });
    }

}
