import { Element, MasterElement, Attr, TargetElement, attrEnabled, Event, EventEmitter } from '@master/element';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ContentElement } from '../content';
import { HeaderElement } from '../header';
import { Template } from '@master/template';

import css from './modal.scss';

const NAME = 'modal';
const PX = 'px';


@Element('m-' + NAME)
export class ModalElement extends TargetElement {
    static css = css;

    private trigger: MasterElement;

    @Event()
    closedByClickEmitter: EventEmitter;

    contentTokens: any = () => [
        'slot', {
            $created: (element: HTMLElement) => this.wrap = element
        }
    ]

    template = new Template(() => [
        'm-overlay', {
            part: 'overlay',
            $if: attrEnabled(this.overlay),
            $created: (element: MasterElement) => this.overlayElement = element
        },
        'div', {
            part: 'root',
            $created: (element: MasterElement) => this.root = element
        }, [
            ...this.contentTokens(),
            'm-button', {
                part: 'close',
                class: 'round xs',
                $if: this.closeButton,
                $created: (element: MasterElement) => this.closeElement = element,
            }, [
                'm-icon', { name: this.closeButton, direction: 'left' }
            ]
        ]
    ]);

    lightTemplate: Template;

    render() {
        this.template.render(this.shadowRoot);
        if (this.lightTemplate) this.lightTemplate.render(this);
    }

    onDisconnected() {
        this.template.remove();
    }

    root: any;
    wrap: any;
    header: HeaderElement;
    // footer: FooterElement;
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
                modal.closeElement.off({ id: [NAME] });
            }
            if (value) {
                modal.closeElement
                    .on('click', async () => {
                        if (await modal.close() !== false) {
                            modal.closedByClickEmitter(modal.closeElement);
                        }
                    }, { passive: true, id: [NAME] });
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
                modal.overlayElement.off({ id: [NAME] });
            }
            if (value === 'close') {
                modal.overlayElement
                    .on('click', async () => {
                        if (await modal.close()) {
                            modal.closedByClickEmitter(modal.overlayElement);
                        }
                    }, { passive: true, id: [NAME] });
            }
        }
    })
    overlay: string = 'static';

    overlayElement: MasterElement;
    closeElement: MasterElement;

    protected toggling(
        options: KeyframeEffectOptions
    ) {
        let keyframes: any;
        let content: ContentElement;
        let pushing;

        if (this.placement === 'origin' && this.trigger) {

            if (!this.hidden && this.hideTrigger) {
                this.trigger.toggleClass('invisible', true);
            }

            content = Array.from(this.children)
                .filter((eachElement) => eachElement.matches('m-content'))[0] as ContentElement;

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
                            pushingOffset = -this.root.offsetWidth / 3;
                        break;
                    case 'left':
                        dir = 'X';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = this.root.offsetWidth / 3;
                        break;
                    case 'bottom':
                        dir = 'Y';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -this.root.offsetHeight / 3;
                        break;
                    case 'top':
                        dir = 'Y';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = this.root.offsetHeight / 3;
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
        return new Promise<void>((finish) => {
            this.animation.onfinish = () => {
                const hidden = this.hidden;
                if (hidden && this.trigger && this.hideTrigger) {
                    this.trigger.toggleClass('invisible', false);
                }
                if (content) {
                    if (hidden) {
                        enableBodyScroll(content.root);
                    } else {
                        disableBodyScroll(content.root);
                        content.enable();
                    }
                }
                finish();
            };
        });
    }
}
