import { Element, Attr, ToggleableElement } from '@element';
import { OptionElement } from '../option';

import css from './popup.scss';

import { ContentElement } from '@ui/components/content';
import { SelectElement } from '.';
import { ItemElement } from '@ui/components/item';

const NAME = 'select-popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectPopupElement extends ToggleableElement {

    @Attr({ reflect: false, observe: false })
    options;

    @Attr({ reflect: false, observe: false })
    multiple: boolean;

    triggerEvent = null;

    content: ContentElement;
    select: SelectElement;

    template = $(() => [
        'm-content', {
            'scroll-y': true,
            class: 'bg:popup',
            $created: (element: ContentElement) => this.content = element
        }, () => this.options.map((eachOption: OptionElement) => [
            'm-item', {
                class: 'xs',
                type: 'button',
                $text: eachOption.textContent,
                $data: eachOption
            }
        ]),
    ]);

    protected async toggling(
        options: KeyframeEffectOptions
    ) {

        if (!this.hidden) {
            // prepare to open
            const itemNodes = this.template.nodes[0].children;
            let originItemNode: TemplateNode;

            if (this.multiple) {
                // value and oldValue always not be same
                originItemNode = itemNodes
                    .filter((eachItemNode) => eachItemNode.$data.selected)[0];
            } else {
                originItemNode = itemNodes
                    .find((eachItemNode) => eachItemNode.$data.selected);
            }

            let originItemRect = { top: 0, height: 0 };
            let originItem: ItemElement;

            if (originItemNode && !originItemNode.$data.hidden) {
                originItem = originItemNode.element;
                this.content.to(originItem, 0);
                originItemRect = originItem.getBoundingClientRect();
            }
            const
                selectRect = this.select.getBoundingClientRect(),
                height = this.offsetHeight,
                width = this.offsetWidth,
                windowH = window.innerHeight,
                windowW = window.innerWidth,
                originOffsetTop = originItemRect.top + originItemRect.height / 2;
            let top = selectRect.top + (originItem ? selectRect.height / 2 : 0) - originOffsetTop;
            let left = selectRect.left;
            // exceed Y
            let exceedY = 0;
            if (top <= 5) {
                exceedY = top - 5;
                top = 5;
            } else if (top + height >= windowH - 5) {
                exceedY = top + height - windowH + 5;
                top = windowH - height - 5;
            }

            // exceed X
            if (left <= 5) {
                left = 5;
            } else if (left + width >= windowW - 5) {
                left = windowW - width - 5;
            }

            this.css({
                top,
                left,
                minWidth: selectRect.width,
                transformOrigin: '0 ' + (originOffsetTop + exceedY) + 'px'
            });
        }

        console.log([
            {
                transform: 'scaleY(.9)',
                opacity: 0
            },
            {
                transform: 'scaleY(1)',
                opacity: 1
            }
        ]);

        this.animations.push(
            this.animation = this.animate(
                [
                    {
                        transform: 'scaleY(.9)',
                        opacity: 0
                    },
                    {
                        transform: 'scaleY(1)',
                        opacity: 1
                    }
                ]
                , options)
        )

        await this.animation.finished;
    }

    render() {
        this.template.render(this.shadowRoot);
    }

    removeRender() {
        this.template.remove();
    }

}
