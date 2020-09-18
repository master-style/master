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
    closeOnScroll: boolean;

    @Attr({ reflect: false })
    closeButton: boolean;

    @Attr({ reflect: false })
    overlay: string = 'static';

    overlayElement: HTMLElement;

    protected async toggling() {

        let keyframes: any[];
        let content: any;

        const options = {
            easing: this.easing,
            duration: this.duration
        };

        const wrap = this.wrap;

        if (this.origin === 'trigger' && this.trigger) {

            if (!this.hidden) {
                this.trigger.toggleClass('invisible', true);
            }

            content = this.querySelector('m-content');

            if (content) {
                content.toggleListener(false);
                content.to({ x: 0, y: 0 }, this.duration);
            }

            const
                triggerRect = this.trigger.getBoundingClientRect(),
                wrapRect = wrap.getBoundingClientRect();
            const scale = triggerRect.width / wrapRect.width;
            const x =
                triggerRect.left
                + triggerRect.width / 2
                - wrapRect.left
                - wrapRect.width / 2;
            const y =
                triggerRect.top
                + triggerRect.height / 2
                - wrapRect.top / scale / 2
                - wrapRect.height / 2;
            keyframes = [
                {
                    transform: `translate(${x + PX}, ${y + PX}) scale(${scale})`,
                    height: triggerRect.height / scale + PX,
                    opacity: this.fade ? 0 : 1
                },
                {
                    transform: 'translate(0,0) scale(1)',
                    height: wrapRect.height + PX,
                    opacity: 1
                }
            ];
            console.log(keyframes);
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
        this.animations.push(this.animation);
        this.animation.onfinish = () => {
            this.toggleAttribute('changing', false);
            this.animation = null;
            this.animations = [];
            if (this.hidden && this.trigger) {
                this.trigger.toggleClass('invisible', false);
            }
            if (content && !this.hidden) {
                content.toggleListener(true);
            }
        };
        await this.animation.finished;
    }
}
