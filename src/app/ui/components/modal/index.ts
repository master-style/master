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

    private trigger: HTMLElement;

    template = $(() => [
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.wrap = element
        }, [
            'slot'
        ],
        'm-overlay', { part: 'overlay', $if: this.overlay }
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
    closeButton: boolean;

    @Attr({ reflect: false })
    overlay: boolean;

    protected keyframes(options) {
        const keyframes: any = {};
        const wrap = this.wrap;
        options.$target = wrap;
        if (this.origin === 'trigger') {
            if (this.trigger) {
                if (wrap.tagName === 'M-CONTENT') {
                    wrap.to({ x: 0, y: 0 }, 0);
                }
                const
                    callerRect = this.trigger.getBoundingClientRect(),
                    wrapRect = wrap.getBoundingClientRect(),
                    landingRect = this.querySelector('[part=loading]').getBoundingClientRect();
                const scale = callerRect.width / landingRect.width;
                keyframes.translateX = [
                    callerRect.left
                    + callerRect.width / 2
                    - wrapRect.left
                    - wrapRect.width / 2
                    + PX,
                    0
                ];
                keyframes.translateY = [
                    callerRect.top
                    + callerRect.height / 2
                    - wrapRect.top
                    - wrapRect.height / 2
                    - landingRect.top * scale / 2
                    + PX,
                    0
                ];
                keyframes.scale = [scale, 1]; // after x,y
                keyframes.height = [callerRect.height / scale + landingRect.top + PX, wrapRect.height + PX];
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
                        options.duration = 0;
                    }
            }

            if (this.pushing) {
                const pushing = document.querySelector(this.pushing);
                if (pushing) {
                    this.animatings.push(
                        pushing.animate(pushingKeyframe, {
                            ...options,
                            fill: 'forwards'
                        })
                    );
                }
            }
        }

        if (this.trigger) {
            this.animatings.push(
                this.trigger.animate({
                    opacity: [0, 1]
                }, {
                    ...options,
                    fill: 'forwards'
                })
            );
        }

        return keyframes;
    }

}
