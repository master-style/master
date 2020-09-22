import { Element, Attr } from '@element';
import MasterTogglable from '@ui/togglable';
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
        'm-overlay', {
            $if: this.overlay,
            $created: (element: HTMLElement) => this.overlayElement = element,
        },
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.root = element
        }, [
            'slot',
            'm-button', {
                part: 'close',
                class: 'round xs',
                $if: this.closeButton,
                $created: (element: HTMLElement) => this.closeElement = element,
            }, [
                'm-icon', { name: this.closeButton, direction: 'left' }
            ]
        ]
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }

    removeRender() {
        this.template.remove();
    }

    root: any;
    origin: any;

    @Attr()
    placement: string;

    @Attr({ reflect: false })
    pushing: string;

    @Attr({ reflect: false })
    closeOnScroll: boolean;

    @Attr({
        updater(modal: MasterModal, value, oldValue) {
            if (
                value && oldValue ||
                !value && oldValue
            ) {
                modal.closeElement.off({ id: 'modal' });
            }
            if (value) {
                modal.closeElement
                    .on('click', () => modal.close(), { passive: true, id: 'modal' });
            }
        }
    })
    closeButton: string;

    @Attr({ reflect: false })
    hideTrigger: boolean;

    @Attr({
        reflect: false,
        updater(modal: MasterModal, value: string, oldValue: string) {
            if (oldValue === 'close') {
                modal.overlayElement.off({ id: 'modal' });
            }
            if (value === 'close') {
                modal.overlayElement
                    .on('click', () => modal.close(), { passive: true, id: 'modal' });
            }
        }
    })
    overlay: string = 'static';

    overlayElement: HTMLElement;
    closeElement: HTMLElement;

    protected async toggling() {

        let keyframes: any[];
        let content;

        const options = {
            easing: this.easing,
            duration: this.duration
        };

        const root = this.root;

        if (this.placement === 'origin' && this.trigger) {

            if (!this.hidden && this.hideTrigger) {
                this.trigger.toggleClass('invisible', true);
            }

            content = this.querySelector('m-content');

            if (content) {
                content.disable();
                content.to({ x: 0, y: 0 }, this.duration);
            }

            const
                triggerRect = this.trigger.getBoundingClientRect(),
                rootRect = this.root.getBoundingClientRect();
            const scale = triggerRect.width / rootRect.width;
            const x =
                triggerRect.left - rootRect.left
                + (triggerRect.width - rootRect.width) / 2;
            const y =
                triggerRect.top - rootRect.top
                + (triggerRect.height - rootRect.height) / 2;

            keyframes = [
                {
                    transform: `translate(${x + PX}, ${y + PX}) scale(${scale})`,
                    height: triggerRect.height / scale + PX,
                    opacity: this.fade ? 0 : 1
                },
                {
                    transform: 'translate(0,0) scale(1)',
                    height: rootRect.height + PX,
                    opacity: 1
                }
            ];
        } else {
            if (!this.placement || this.placement === 'origin') {
                keyframes = [
                    { opacity: 0 },
                    { opacity: 1 }
                ];
            } else if (this.placement === 'center') {
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
                switch (this.placement) {
                    case 'right':
                        dir = 'X';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -root.offsetWidth / 3;
                        break;
                    case 'left':
                        dir = 'X';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = root.offsetWidth / 3;
                        break;
                    case 'bottom':
                        dir = 'Y';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -root.offsetHeight / 3;
                        break;
                    case 'top':
                        dir = 'Y';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = root.offsetHeight / 3;
                        break;
                }

                if (this.pushing) {
                    pushingKeyframes = [
                        { transform: 'translate' + dir + '(0)' },
                        { transform: 'translate' + dir + '(' + pushingOffset + PX + ')' }
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

        this.animation = this.root.animate(keyframes, options);
        this.animations.push(this.animation);
        this.animation.onfinish = () => {
            this.toggleAttribute('changing', false);
            this.animation = null;
            this.animations = [];
            if (this.hidden && this.trigger && this.hideTrigger) {
                this.trigger.toggleClass('invisible', false);
            }
            if (content && !this.hidden) {
                content.enable();
            }
        };
        await this.animation.finished;
    }
}
