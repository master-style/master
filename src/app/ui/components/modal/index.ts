
import { Element, Attr } from '@element';
import MasterTogglable from '../../togglable';
import css from './index.scss';

const NAME = 'modal';
const PX = 'px';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterModal extends MasterTogglable {

    private caller: HTMLElement;

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

    @Attr()
    origin: string;

    @Attr({ reflect: false })
    pushing: string;

    @Attr({ reflect: false })
    hideOrigin: boolean;

    @Attr({ reflect: false })
    closeOnScroll: boolean;

    @Attr({ reflect: false })
    overlay: boolean;

    keyframes(option) {
        const keyframes: any = {};
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
                keyframes.translateX = [
                    toggleRect.left
                    + toggleRect.width / 2
                    - wrapRect.left
                    - wrapRect.width / 2
                    + PX,
                    0
                ];
                keyframes.translateY = [
                    toggleRect.top
                    + toggleRect.height / 2
                    - wrapRect.top
                    - wrapRect.height / 2
                    - originRect.top * scale / 2
                    + PX,
                    0
                ];
                keyframes.scale = [scale, 1]; // after x,y
                keyframes.height = [toggleRect.height / scale + originRect.top + PX, wrapRect.height + PX];
                if (this.fade) keyframes.opacity = [0, 1];
            } else {
                keyframes.scale = [this.opened ? 1.1 : .9, 1];
                keyframes.opacity = [0, 1];
            }
        } else {
            const pushingKeyframe: any = {};
            switch (this.origin) {
                case 'right':
                    if (this.pushing)
                        pushingKeyframe.translateX = [0, -wrap.offsetWidth / 3 + PX];
                    keyframes.translateX = ['100%', 0];
                    break;
                case 'left':
                    if (this.pushing)
                        pushingKeyframe.translateX = [0, wrap.offsetWidth / 3 + PX];
                    keyframes.translateX = ['-100%', 0];
                    break;
                case 'bottom':
                    if (this.pushing)
                        pushingKeyframe.translateY = [0, -wrap.offsetHeight / 3 + PX];
                    keyframes.translateY = ['100%', 0];
                    break;
                case 'top':
                    if (this.pushing)
                        pushingKeyframe.translateY = [0, wrap.offsetHeight / 3 + PX];
                    keyframes.translateY = ['-100%', 0];
                    break;
                default:
                    if (this.fade) {
                        keyframes.opacity = [0, 1];
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

        return keyframes;
    }

}
