import { Element, Attr } from '@master/element';
import { createPopper, Placement } from '@popperjs/core';
import { isInteractOutside } from '../../utils/is-interact-outside';
import { Template } from '@master/template';

const generateGetBoundingClientRect = (x = 0, y = 0) => () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
})

declare const ResizeObserver: any;

import css from './popup.scss';
import { ContentElement } from '../../layout/content';
import { $ } from '@master/dom';
import { TargetElement } from '../../shared/target';
import debounce from '../../utils/debounce';

const $body = $(document.body);
const NAME = 'popup';

@Element('m-' + NAME)
export class PopupElement extends TargetElement {
    static css = css;
    /**
     * default
     */
    _fade = true;
    _duration = 300;

    content: ContentElement;
    popper;
    #resizeObserver;

    @Attr({ reflect: false })
    offset = 0;

    @Attr({ reflect: false })
    distance = 8;

    @Attr({ reflect: false })
    boundaryPadding = 10;

    @Attr({ reflect: false })
    placement: Placement = 'bottom';

    @Attr({ reflect: false })
    followCursor: boolean;

    @Attr({ reflect: false })
    closeOn = 'click:outside';

    @Attr({ reflect: false })
    minWidth: string;

    activeChildPopups = new Set;

    // arrow: SVGElement;

    contentTokens: any = () => [];

    template = new Template(() => [
        'm-content', {
            'scroll-y': true,
            guide: true,
            part: 'content',
            $created: (element: ContentElement) => this.content = element
        }, [
            'slot', {
                $created: (element) => element.on('slotchange', (event) => {
                    const onSlotChange = this['onSlotChange'];
                    if (onSlotChange) {
                        onSlotChange.call(this, event);
                    }
                })
            },
            ...this.contentTokens(),
            // 'div', {
            //     slot: 'part',
            //     part: 'arrow',
            //     $created: (element: SVGAElement) => this.arrow = element
            // }, [
            //     'svg', {
            //         part: 'arrow-icon',
            //         height: 10,
            //         viewBox: '0 0 64 20',
            //         $namespace: 'http://www.w3.org/2000/svg',
            //         $html: '<g transform="matrix(1.04009,0,0,1.45139,-1.26297,-65.9145)"><path d="M1.214,59.185C1.214,59.185 12.868,59.992 21.5,51.55C29.887,43.347 33.898,43.308 42.5,51.55C51.352,60.031 62.747,59.185 62.747,59.185L1.214,59.185Z"></path></g>'
            //     }
            // ]
        ]
    ]);

    protected handleTrigger(event, whether) {
        if (!whether) {
            if (
                !isInteractOutside(this.trigger, event) ||
                !isInteractOutside(this.content, event, this.distance)
            ) {
                return false;
            }
        }
    }

    private determineClose = (event: any) => {
        if (this.animation || this.activeChildPopups.size) {
            return;
        }
        if (
            isInteractOutside(this.trigger, event) &&
            isInteractOutside(this.content, event, this.distance)
        ) {
            this.close();
        }
    }

    updateSize(
        rect: DOMRect = this.trigger.getBoundingClientRect()
    ) {
        console.log(rect);
        const windowHeight = window.innerHeight;
        const bottomDistance = windowHeight - (rect.y + rect.height);
        const topDistance = rect.y;
        this.css('maxHeight', (topDistance < bottomDistance ? bottomDistance : topDistance) - this.distance - 10);
        if (this.minWidth === 'trigger') {
            this.css('minWidth', rect.width);
        }
    }

    async onOpen() {
        const activate = (parent: PopupElement) => {
            if (!parent) {
                return;
            }
            if (parent.tagName === 'M-POPUP') {
                parent.activeChildPopups.add(this);
            } else if (parent !== $body) {
                activate(parent.parentNode as PopupElement);
            }
        };

        activate(this.trigger.parentNode as PopupElement);

        if (!this.popper) {
            await new Promise((resolve) => {
                let distance = this.distance;
                const getPopperOptions = () => ({
                    placement: this.placement,
                    modifiers: [
                        // {
                        //     name: 'arrow',
                        //     options: {
                        //         element: this.arrow,
                        //     },
                        // },
                        {
                            name: 'offset',
                            options: {
                                offset: [this.offset, distance],
                            },
                        },
                        {
                            name: 'flip',
                            options: {
                                flipVariations: false,
                            },
                        },
                        {
                            name: 'preventOverflow',
                            options: {
                                padding: this.boundaryPadding,
                            }
                        }
                    ],
                    onFirstUpdate: resolve
                });
                if (this.followCursor && this.currentEvent && this.currentEvent instanceof MouseEvent) {
                    const virtualElement = {
                        getBoundingClientRect: generateGetBoundingClientRect(this.currentEvent.clientX, this.currentEvent.clientY),
                    };
                    distance = 0;
                    this.popper = createPopper(virtualElement, this, {
                        ...getPopperOptions()
                    });
                } else {
                    this.popper = createPopper(this.trigger, this, {
                        ...getPopperOptions()
                    });
                }
            });
        }
    }

    onOpened() {
        if (this.popper) {
            if (this.closeOn && this.closeOn.indexOf('mouseout') !== -1) {
                $body
                    .on('mousemove', this.determineClose, { passive: true });
            }

            if (this.closeOn && this.closeOn.indexOf('click:outside') !== -1) {
                $body
                    .on('mousedown click', this.determineClose, { passive: true });
            }

            if (!this.#resizeObserver) {
                this.#resizeObserver = new ResizeObserver(debounce(() => {
                    const rect = this.trigger.getBoundingClientRect();
                    // determine whether element is hidden
                    if (!rect.x && !rect.y && !rect.width && !rect.height) {
                        this.onClosed();
                    } else if (this.popper) {
                        this.updateSize(rect);
                        this.popper.forceUpdate();
                    }
                }));
                this.#resizeObserver.observe(this.content);
                this.#resizeObserver.observe(this.trigger);
            }
        }
    }

    onClose() {
        const deactivate = (parent: PopupElement) => {
            if (!parent) {
                return;
            }
            if (parent.tagName === 'M-POPUP') {
                parent.activeChildPopups.delete(this);
            } else if (parent !== $body) {
                deactivate(parent.parentNode as PopupElement);
            }
        };

        deactivate(this.trigger.parentNode as PopupElement);

        if (this.#resizeObserver) {
            this.#resizeObserver.unobserve(this.content);
            this.#resizeObserver.unobserve(this.trigger);
            this.#resizeObserver = null;
        }
    }

    onClosed() {
        if (this.popper) {
            this.popper = this.popper.destroy();
            $($body).off(this.determineClose);
        }
    }

    protected toggling(
        options: KeyframeEffectOptions
    ) {
        let keyframes: any;

        let scale = '';
        let translate = '';
        let transformOrigin = '';

        switch (this.popper.state.placement.split('-')[0]) {
            case 'top':
                scale = 'Y(.9)';
                transformOrigin = 'center bottom';
                break;
            case 'bottom':
                scale = 'Y(.9)';
                transformOrigin = 'top center';
                break;
            case 'left':
                scale = 'X(.9)';
                transformOrigin = 'right center';
                break;
            case 'right':
                scale = 'X(.9)';
                transformOrigin = 'left center';
                break;
        }

        keyframes = [
            {
                transformOrigin,
                transform: 'scale' + scale,
                opacity: this.fade ? 0 : 1
            },
            {
                transformOrigin,
                transform: 'scaleY(1)',
                opacity: 1
            }
        ];

        if (this.hidden) {
            keyframes.reverse();
        }

        this.animation = this.content.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }

    render() {
        this.template.render(this.shadowRoot);
    }
}