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
        'slot', {
            part: 'root',
            $created: (element: HTMLElement) => this.wrap = element
        },
        'm-overlay', {
            $if: this.overlay,
            $created: (element: HTMLElement) => this.overlayElement = element
        }
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
    overlay: string = 'static';

    overlayElement: HTMLElement;

    protected toggling() {

        let keyframes: any[];

        const options = {
            easing: this.easing,
            duration: this.duration
        };

        const wrap = this.wrap;

        if (this.origin === 'trigger' && this.trigger) {
            const landing = this.querySelector('[part=landing]');
            let closer: any = landing.parentElement;
            do {
                if (closer.tagName === 'M-CONTENT') {
                    break;
                } else {
                    closer = closer.parentElement;
                }
            } while (closer.tagName === 'M-MODAL');

            if (closer.tagName === 'M-CONTENT') {
                console.log(closer);
                closer.to({ x: 0, y: 0 }, 0);
            }
            const
                callerRect = this.trigger.getBoundingClientRect(),
                wrapRect = wrap.getBoundingClientRect(),
                landingRect = landing.getBoundingClientRect();
            const scale = callerRect.width / landingRect.width;
            const x =
                callerRect.left
                + callerRect.width / 2
                - wrapRect.left
                - wrapRect.width / 2;
            const y =
                callerRect.top
                + callerRect.height / 2
                - wrapRect.top
                - wrapRect.height / 2
                - landingRect.top * scale / 2;
            keyframes = [
                {
                    transform: `translateX(${x + PX}) translateY(${y + PX}) scale(${scale})`,
                    height: callerRect.height / scale + landingRect.top + PX,
                    opacity: this.fade ? 0 : 1
                },
                {
                    transform: 'translateX(0) translateY(0) scale(1)',
                    height: wrapRect.height + PX,
                    opacity: 1
                }
            ];
        } else {
            if (!this.origin || this.origin === 'trigger') {
                keyframes = [
                    { opacity: 0 },
                    { opacity: 1 }
                ];
            } else if (this.origin === 'center') {
                keyframes = [
                    {
                        transform: `scale(${this.hidden ? .9 : 1.1})`,
                        opacity: 0
                    },
                    {
                        transform: 'scale(1)',
                        opacity: 1
                    }
                ];
            } else {
                let pushingKeyframes;
                let dir;
                let offset;
                let pushingOffset;
                switch (this.origin) {
                    case 'right':
                        dir = 'X';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -wrap.offsetWidth / 3;
                        break;
                    case 'left':
                        dir = 'X';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = wrap.offsetWidth / 3;
                        break;
                    case 'bottom':
                        dir = 'Y';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -wrap.offsetHeight / 3;
                        break;
                    case 'top':
                        dir = 'Y';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = wrap.offsetHeight / 3;
                        break;
                }

                if (this.pushing) {
                    pushingKeyframes = [
                        { transform: 'translate' + dir + '(0)' },
                        { transform: 'translate' + dir + '(' + pushingOffset + ')' }
                    ];

                    if (this.hidden)
                        pushingKeyframes.reverse();

                    const pushing = document.querySelector(this.pushing);
                    if (pushing) {
                        this.animations.push(
                            pushing.animate(pushingKeyframes, {
                                ...options,
                                fill: 'forwards'
                            })
                        );
                    }
                }

                keyframes = [
                    { transform: 'translate' + dir + '(' + offset + ')' },
                    { transform: 'translate' + dir + '(0)' }
                ];
            }

        }

        const overlayKeyframes = [
            { opacity: 0 },
            { opacity: 1 }
        ];

        if (this.hidden) {
            keyframes.reverse();
            overlayKeyframes.reverse();
        }

        if (this.overlay) {
            this.animations.push(
                this.overlayElement.animate(overlayKeyframes, options)
            );
        }

        this.animation = this.wrap.animate(keyframes, options);
    }
}
