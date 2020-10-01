import { Element, Attr, ToggleableElement, attrEnabled } from '@element';
import css from './index.scss';

const NAME = 'modal';
const PX = 'px';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ModalElement extends ToggleableElement {

    private trigger: HTMLElement;

    contentTokens;
    slotTokens: any = () => ['slot'];

    shadowTemplate = $(() => [
        'm-overlay', {
            $if: attrEnabled(this.overlay),
            $created: (element: HTMLElement) => this.overlayElement = element,
        },
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.root = element
        }, this.slotTokens().concat([
            'm-button', {
                part: 'close',
                class: 'round xs',
                $if: this.closeButton,
                $created: (element: HTMLElement) => this.closeElement = element,
            }, [
                'm-icon', { name: this.closeButton, direction: 'left' }
            ]
        ])
    ]);

    template: MasterTemplate;

    render() {
        this.shadowTemplate.render(this.shadowRoot);
        if (this.template) this.template.render(this);
    }

    removeRender() {
        this.shadowTemplate.remove();
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
        update(modal: ModalElement, value, oldValue) {
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
        update(modal: ModalElement, value: string, oldValue: string) {
            if (oldValue === 'close' || oldValue === 'none') {
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

    protected toggling(
        options: KeyframeEffectOptions
    ) {
        let keyframes: any;

        let content;
        let pushing;

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
            console.log(rootRect);
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

                    pushing = document.querySelector(this.pushing);
                    if (pushing) {
                        this.animations.push(
                            pushing.animate(pushingKeyframes, {
                                ...options,
                                fill: 'both'
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

        if (attrEnabled(this.overlay)) {
            this.animations.push(
                this.overlayElement.animate(overlayKeyframes, options)
            );
        }

        this.animation = this.root.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = () => {
                const hidden = this.hidden;
                if (hidden && this.trigger && this.hideTrigger) {
                    this.trigger.toggleClass('invisible', false);
                }
                if (content && !hidden) {
                    content.enable();
                }
                finish();
            };
        });
    }
}
