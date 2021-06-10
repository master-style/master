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
const $html = $(document.documentElement);
const NAME = 'popup';
const lockedPopup = new Set();

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

    @Attr()
    withOverlay: boolean;

    @Attr()
    willLock: boolean;

    activeChildPopups = new Set;

    master;

    // arrow: SVGElement;

    contentTokens: any = () => [];

    template = new Template(() => [
        'm-overlay', {
            $if: this.withOverlay,
            part: 'overlay'
        },
        'div', {
            part: 'master',
            $created: (element: HTMLDivElement) => this.master = $(element)
        }, [
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
        ]
    ]);

    protected preventTrigger({ event, trigger, oldTrigger, hidden }) {

        if (trigger !== oldTrigger) {
            if (this.popper) {
                this.popper.state.elements.reference = trigger;
                this.popper.update();
            }
        }

        if (!hidden && event.type === 'mouseout') {
            return !isInteractOutside(this.master, event, this.distance);
        }
    }

    private whetherToClose = (event: any) => {
        if (this.activeChildPopups.size) {
            return;
        }

        /**
         * 不可使用 isInteractOutside 來偵測 trigger 互動範圍，會有偵測誤差的問題存在，暫時無解
         */
        const isInteractTriggerOutside = event.target !== this.trigger && !this.trigger.contains(event.target);
        const isInteractTargetOutside = isInteractOutside(this.master, event, this.distance);

        if (isInteractTriggerOutside && isInteractTargetOutside) {
            this.close();
        } else if (
            this.closingDelay && (!isInteractTriggerOutside || !isInteractTargetOutside)
        ) {
            this.closingDelay = clearInterval(this.closingDelay);
        }
    }

    updateSize(
        rect: DOMRect = this.trigger.getBoundingClientRect()
    ) {
        const windowHeight = window.innerHeight;
        const bottomDistance = windowHeight - (rect.y + rect.height);
        const topDistance = rect.y;
        this.master.css('maxHeight', (topDistance < bottomDistance ? bottomDistance : topDistance) - this.distance - 10);
        this.style.setProperty('--trigger-width', rect.width + 'px');
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
        this.updateSize();

        if (this.willLock) {
            if (!lockedPopup.size) {
                document.body.classList.add('locked-by-popup');
            }
            lockedPopup.add(this);
            this.trigger?.classList.add('unlocked-by-popup');
        }

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
                    this.popper = createPopper(virtualElement, this.master, {
                        ...getPopperOptions()
                    });
                } else {
                    this.popper = createPopper(this.trigger, this.master, {
                        ...getPopperOptions()
                    });
                }
            });

            $html.off(this.whetherToClose);

            if (this.closeOn) {
                if (this.closeOn.indexOf('move:outside') !== -1) {
                    $html
                        .on('mousemove', this.whetherToClose, { passive: true });
                }
                if (this.closeOn.indexOf('click:outside') !== -1) {
                    $html
                        .on('click', this.whetherToClose, { passive: true });
                }
            }
        }

    }

    onOpened() {
        if (this.popper) {
            if (!this.#resizeObserver && !this.followCursor) {
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

        // resolve [willLock] changed during opening
        if (lockedPopup.size) {
            lockedPopup.delete(this);
        }

        if (this.willLock) {
            if (!lockedPopup.size) {
                document.body.classList.remove('locked-by-popup');
            }
            this.trigger?.classList.remove('unlocked-by-popup');
        }

        if (this.#resizeObserver) {
            this.#resizeObserver.unobserve(this.content);
            this.#resizeObserver.unobserve(this.trigger);
            this.#resizeObserver = null;
        }
    }

    onClosed() {
        if (this.popper) {
            this.popper = this.popper.destroy();
        }

        /**
         * whetherToClose
         * * 於 changing 及 hidden 為 false 時都必須偵測 
         */
        $html.off(this.whetherToClose);
    }

    protected async toggling(
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

        this.animations.push(this.content.animate(keyframes, options));

        return Promise.all(
            this.animations.map((animation) => new Promise((finish) => {
                animation.onfinish = finish
            }))
        )

    }

    render() {
        this.template.render(this.shadowRoot);
    }
}