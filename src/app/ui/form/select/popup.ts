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

    duration = 300;
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
                empty: eachOption.empty,
                selected: eachOption.selected,
                $text: eachOption.textContent,
                $data: eachOption,
                $created: (element: ItemElement, node: TemplateNode) => {
                    element.on('click', () => {
                        if (this.select.multiple) {
                            node.$data.selected = !node.$data.selected;
                            this.updatePosition();
                        } else {
                            this.close();
                            node.$data.selected = true;
                        }
                        this.select.changeEmitter(this.select.value);
                    }, { passive: true, id: this });
                }
            }
        ]),
    ]);

    #offsetTop = 0;

    updatePosition() {
        const itemNodes = this.template.nodes[0].children;
        let originItemNode: TemplateNode;

        if (this.select.multiple) {
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
            diffTop = (originItem ? selectRect.height / 2 : 0) - originItemRect.height / 2,
            offsetTop = selectRect.top - originItemRect.top + diffTop;
        if (!originItem) this.#offsetTop = 0;
        this.#offsetTop += offsetTop;
        let top = this.#offsetTop;
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
            transformOrigin: '0 ' + (selectRect.top - this.#offsetTop + 2 * diffTop) + 'px'
        });
    }

    protected toggling(
        options: KeyframeEffectOptions
    ) {

        const keyframes: any = [
            {
                transform: 'scaleY(.9)',
                opacity: 0
            },
            {
                transform: 'scaleY(1)',
                opacity: 1
            }
        ];

        if (!this.hidden) {
            // prepare to open
            this.updatePosition();
        } else {
            keyframes.reverse();
        }

        this.animation = this.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = () => {
                if (this.hidden) {
                    this.#offsetTop = 0;
                    this.css({
                        top: '',
                        left: '',
                        minWidth: '',
                        transformOrigin: ''
                    });
                }
                finish();
            };
        });
    }

    render() {
        this.template.render(this.shadowRoot);
    }

    removeRender() {
        this.template.remove();
    }

}
