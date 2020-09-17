
import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'modal';
const PX = 'px';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterModal extends HTMLElement {

    template = $(() => [
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.wrap = element
        }, [
            'slot'
        ],
        'div', { part: 'overlay', $if: this.overlay }
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }

    wrap: any;

    #namespace: string;

    easing = 'cubic-bezier(.25,.8,.25,1)';

    private caller: HTMLElement;

    @Attr()
    origin: string;

    @Attr()
    opened: boolean;

    @Attr()
    duration = 300;

    @Attr()
    fade: boolean;

    @Attr()
    trigger: string = 'tap';

    changing: any = false;
    animatings = [];

    #keyframe: any;

    private prepare(whether, complete?: () => any) {
        const target = this;
        const name = this.constructor.name.split('Master')[1].toLowerCase();
        $('[toggle-' + name + ']')
            .forEach((eachToggle: Element) => {
                if (target.matches(eachToggle.attr(name))) {
                    eachToggle.attr('aria-expanded', whether);
                    const icon = eachToggle
                        .children
                        .filter((eachChild) => eachChild.matches('m-icon'))[0];
                    if (icon) icon.toggleAttribute('active', whether);
                }
            });
        // custom.call(target, whether);
        if (target.changing) {
            for (const animating of target.animatings) {
                animating.reverse();
            }
        } else {
            const done = () => {
                if (target.changing) {
                    if (target.changing.reversed) whether = !whether;
                    target.toggleAttr('changing', false);
                }
                if (!whether) target.rmClass('show');
                target.changing = false;
                delete target.animatings;
                target.opened = whether;
                target.attr('aria-hidden', !whether ? true : null);
                // $.cb.call(this, complete);
                // if (target.onPrepared) target.onPrepared(whether);
                // if (whether && target.onOpened) target.onOpened(whether);
                // if (!whether && target.onClosed) target.onClosed(whether);
                // emit(target, whether ? 'opened' : 'closed');
            };
            if (target.isConnected && target.duration) {
                target
                    .toggleAttr('changing', true)
                    .animatings = target.animatings ? target.animatings : [];

                const option: any = {
                    easing: target.easing,
                    duration: target.duration,
                    reverse: !whether
                };
                const keyframe = target.#keyframe(option); // after .animatings
                // target | wrap animation
                target.animatings.push(
                    target.changing = (option.target || target).animate(keyframe, option, done)
                );
                // overlay animation
                if (target['overlay']) {
                    target.animatings.push(
                        target['$overlay'].animate({
                            opacity: [0, 1]
                        }, option)
                    );
                }
            } else {
                done();
            }
        }

        return target;
    }

    open(complete?: () => any) {
        if (this.opened === true) {
            if (complete) complete();
            return;
        }
        this.opened = true;
        this.addClass('show');
        // custom.call(target); // custom callback
        // emit(target, 'open');
        this.prepare(true, complete);
    }

    close(complete?: () => any) {
        if (this.opened === false) {
            if (complete) complete();
            return;
        }
        this.opened = false;
        // custom.call(target); // custom callback
        // emit(target, 'close');
        this.prepare(false, complete);
    }

    @Attr({ reflect: false })
    pushing: string;

    @Attr({ reflect: false })
    hideOrigin: boolean;

    @Attr({ reflect: false })
    closeOnScroll: boolean;

    @Attr({ reflect: false })
    overlay: boolean;

    keyframe(option) {
        const keyframe: any = {};
        const wrap = this.wrap;
        option.$target = wrap;
        if (this.origin === 'toggle') {
            if (this.caller) {
                if (wrap.tagName === 'M-CONTENT') {
                    wrap.to({ x: 0, y: 0 }, 0);
                }
                const
                    toggleRect = this.caller.getBoundingClientRect(),
                    wrapRect = wrap.getBoundingClientRect(),
                    originRect = this.querySelector('[part=origin]').getBoundingClientRect();
                const scale = toggleRect.width / originRect.width;
                keyframe.translateX = [
                    toggleRect.left
                    + toggleRect.width / 2
                    - wrapRect.left
                    - wrapRect.width / 2
                    + PX,
                    0
                ];
                keyframe.translateY = [
                    toggleRect.top
                    + toggleRect.height / 2
                    - wrapRect.top
                    - wrapRect.height / 2
                    - originRect.top * scale / 2
                    + PX,
                    0
                ];
                keyframe.scale = [scale, 1]; // after x,y
                keyframe.height = [toggleRect.height / scale + originRect.top + PX, wrapRect.height + PX];
                if (this.fade) keyframe.opacity = [0, 1];
            } else {
                keyframe.scale = [this.opened ? 1.1 : .9, 1];
                keyframe.opacity = [0, 1];
            }
        } else {
            const pushingKeyframe: any = {};
            switch (this.origin) {
                case 'right':
                    if (this.pushing)
                        pushingKeyframe.translateX = [0, -wrap.offsetWidth / 3 + PX];
                    keyframe.translateX = ['100%', 0];
                    break;
                case 'left':
                    if (this.pushing)
                        pushingKeyframe.translateX = [0, wrap.offsetWidth / 3 + PX];
                    keyframe.translateX = ['-100%', 0];
                    break;
                case 'bottom':
                    if (this.pushing)
                        pushingKeyframe.translateY = [0, -wrap.offsetHeight / 3 + PX];
                    keyframe.translateY = ['100%', 0];
                    break;
                case 'top':
                    if (this.pushing)
                        pushingKeyframe.translateY = [0, wrap.offsetHeight / 3 + PX];
                    keyframe.translateY = ['-100%', 0];
                    break;
                default:
                    if (this.fade) {
                        keyframe.opacity = [0, 1];
                    } else {
                        option.duration = 0;
                    }
            }

            if (this.pushing) {
                const pushing = document.querySelector(this.pushing);
                if (pushing) {
                    this.animatings.push(
                        pushing.animate(pushingKeyframe, {
                            ...option,
                            fill: 'forwards'
                        })
                    );
                }
            }
        }

        if (this.caller) {
            this.animatings.push(
                this.caller.animate({
                    opacity: [0, 1]
                }, {
                    ...option,
                    fill: 'forwards'
                })
            );
        }

        return keyframe;
    };


}
