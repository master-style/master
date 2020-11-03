import { Element, Attr, ToggleableElement } from '../../../element';
import { OptionElement } from '../option';
import { isClickedOutside } from '../../../utils/is-clicked-outside';

import css from './popup.scss';

import { ContentElement } from '../../../ui/components/content';
import { SelectElement } from './';
import { ItemElement } from '../../../ui/components/item';
import { CheckElement } from '../check';

const NAME = 'select-popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectPopupElement extends ToggleableElement {

    items: ItemElement[] = [];

    @Attr()
    multiple: boolean = false;

    duration = 300;
    triggerEvent = null;

    content: ContentElement;
    select: SelectElement;

    senseEdge = 5;

    #offsetTop = 0;

    template = window['Master'](() => [
        'm-content', {
            'scroll-y': true,
            guide: true,
            $created: (element: ContentElement) => this.content = element
        }, () => this.select.options.get().map((eachOption: OptionElement) => [
            'm-item', {
                class: 'xs',
                type: 'button',
                empty: eachOption.empty,
                selected: eachOption.selected,
                $data: eachOption,
                $html: eachOption.innerHTML,
                $created: (item: ItemElement) => {
                    this.items.push(item);
                },
                $removed: (item: ItemElement) => {
                    this.items.splice(this.items.indexOf(item), 1);
                }
            }, [
                'm-check', {
                    slot: 'foot',
                    name: '!option' + this.select.uid,
                    class: 'sm',
                    checked: eachOption.selected,
                    $data: eachOption,
                    type: this.multiple ? 'checkbox' : 'radio',
                    $created: (check: CheckElement, node: TemplateNode) => {
                        check
                            .on('change', () => {
                                if (this.multiple) {
                                    node.$data.selected = check.checked;
                                    if (this.select.search) this.select.search.focus();
                                    this.updatePosition();
                                    this.render();
                                } else {
                                    this.close();
                                    node.$data.selected = check.checked;
                                }
                                if (!this.select.dirty) {
                                    this.select.dirty = true;
                                }
                            }, { passive: true, id: this })
                            .on('click', () => {
                                if (!this.multiple && check.checked) {
                                    this.close();
                                }
                            }, { passive: true, id: this });
                    }
                }
            ]
        ]), [
            'div', {
                $if: this.#keyword && this.#foundCount === 0,
                part: 'search-info',
                $text: 'Not Found'
            }
        ]
    ]);

    #foundCount: number = 0;
    #keyword: string;

    search(keyword: string) {
        this.#keyword = keyword;
        this.toggleAttribute('searching', !!keyword);
        this.#foundCount = 0;
        this.items.forEach((eachItem: ItemElement) => {
            const found = eachItem.textContent.indexOf(keyword) !== -1;
            if (found) this.#foundCount++;
            eachItem
                .toggleAttribute('found', found);
        });
        this.render();
    }

    onOpen() {
        this.content.renderScroll();
        if (this.select.search) {
            this.select.search.readOnly = false;
            this.select.search.focus();
        }
    }

    onOpened() {
        document.documentElement.css('overflow', 'hidden');
        document.body
            .on('click', async (clickEvent: any) => {
                if (
                    clickEvent.target === this ||
                    this.select.contains(clickEvent.target)
                ) return;
                if (isClickedOutside(this, clickEvent, this.senseEdge)) {
                    this.close();
                }
            }, { passive: true, id: this });
    }

    onClose() {
        if (this.select.search) {
            this.select.search.value = this.select.keyword = '';
        }
        document.body.off({ id: this });
        document.documentElement.css('overflow', '');
        this.select.focused = false;
        if (!this.select.multiple) {
            this.select.search.value = this.select.value || '';
        }
    }

    onClosed() {
        if (this.select.search) {
            this.select.search.readOnly = true;
        }
        this.#foundCount = 0;
        this.#keyword = '';
        this.toggleAttribute('searching', false);
        this.remove();
    }

    updatePosition() {
        let top = 0;
        let left = 0;
        let diffTop = 0;
        let origin = 0;

        const
            rect = this.getBoundingClientRect(),
            selectRect = this.select.getBoundingClientRect(),
            windowHeight = window.innerHeight,
            windowWidth = window.innerWidth;

        if (this.multiple || this.select.searchable) {
            top = selectRect.top + selectRect.height + 5;
            left = selectRect.left;
        } else {
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
            diffTop = (originItem ? selectRect.height / 2 : 0) - originItemRect.height / 2;
            const
                offsetTop = selectRect.top - originItemRect.top + diffTop;
            if (!originItem) this.#offsetTop = 0;
            this.#offsetTop += offsetTop;

            top = this.#offsetTop;
            left = selectRect.left;
            origin = selectRect.top - this.#offsetTop + 3 * diffTop;
        }

        // exceed Y
        let exceedY = 0;
        if (top <= 5) {
            exceedY = top - 5;
            top = 5;
        } else if (top + rect.height >= windowHeight - 5) {
            exceedY = top + rect.height - windowHeight + 5;
            top = windowHeight - rect.height - 5;
        }

        // exceed X
        if (left <= 5) {
            left = 5;
        } else if (left + rect.width >= windowWidth - 5) {
            left = windowWidth - rect.width - 5;
        }

        this.css({
            top,
            left,
            minWidth: selectRect.width,
            transformOrigin: '0 ' + (origin + exceedY) + 'px'
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
