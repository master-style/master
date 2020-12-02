import { Element, TargetElement, Attr } from '../../../element';
import { createPopper, Placement } from '@popperjs/core';
import { isInteractOutside } from '../../../utils/is-interact-outside';

declare const ResizeObserver: any;

import css from './popup.scss';

const NAME = 'popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class PopupElement extends TargetElement {

    /**
     * default
     */
    _fade = true;
    _duration = 300;

    root;
    trigger: HTMLElement;
    popper;
    resizeObserver;

    @Attr({ reflect: false })
    offset = 0;

    @Attr({ reflect: false })
    distance = 8;

    @Attr({ reflect: false })
    boundaryPadding = 10;

    @Attr({ reflect: false })
    placement: Placement = 'bottom';

    @Attr({ reflect: false })
    closeOn: string;

    template = window['Master'](() => [
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.root = element
        }, [
            'slot'
        ]
    ]);

    protected handleTrigger(event, whether) {
        if (!whether) {
            if (
                !isInteractOutside(this.trigger, event) ||
                !isInteractOutside(this.root, event, this.distance)
            ) {
                return false;
            }
        }
    }

    private determineClose = (event: any) => {
        if (this.animation) {
            return;
        }
        if (
            isInteractOutside(this.trigger, event) &&
            isInteractOutside(this.root, event, this.distance)
        ) {
            this.close();
        }
    }

    onOpen() {
        if (!this.popper) {
            return new Promise((resolve) => {
                this.popper = createPopper(this.trigger, this, {
                    placement: this.placement,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [this.offset, this.distance],
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
                        },
                    ],
                    onFirstUpdate: resolve
                });
            });
        }
    }

    onOpened() {
        if (this.popper) {

            if (this.closeOn?.indexOf('mouseout') !== -1) {
                document.body
                    .on('mousemove', this.determineClose, { passive: true });
            }

            if (this.closeOn?.indexOf('click:outside') !== -1) {
                document.body
                    .on('click', this.determineClose, { passive: true });
            }

            if (!this.resizeObserver) {
                this.resizeObserver = new ResizeObserver(() => this.popper.update());
                this.resizeObserver.observe(this.root);
            }
        }
    }

    onClose() {
        if (this.resizeObserver) {
            this.resizeObserver = this.resizeObserver.unobserve(this.root);
        }
    }

    onClosed() {
        if (this.popper) {
            this.popper = this.popper.destroy();
            document.body.off(this.determineClose);
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
                translate = 'Y(' + this.distance + 'px)';
                transformOrigin = 'center bottom';
                break;
            case 'bottom':
                scale = 'Y(.9)';
                translate = 'Y(-' + this.distance + 'px)';
                transformOrigin = 'top center';
                break;
            case 'left':
                scale = 'X(.9)';
                translate = 'X(' + this.distance + 'px)';
                transformOrigin = 'right center';
                break;
            case 'right':
                scale = 'X(.9)';
                translate = 'X(-' + this.distance + 'px)';
                transformOrigin = 'left center';
                break;
        }

        keyframes = [
            {
                transformOrigin,
                transform: 'translate' + translate + ' scale' + scale,
                opacity: this.fade ? 0 : 1
            },
            {
                transformOrigin,
                transform: 'translate(0,0) scaleY(1)',
                opacity: 1
            }
        ];

        if (this.hidden) {
            keyframes.reverse();
        }

        this.animation = this.root.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }

    render() {
        this.template.render(this.shadowRoot);
    }
}