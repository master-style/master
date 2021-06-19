import { Element, Attr } from '@master/element';
import { OptionElement } from '../option';
import { Template, TemplateNode } from '@master/template';

import css from './select-popup.scss';

import { ContentElement } from '../../layout/content';
import { SelectElement } from '.';
import { ItemElement } from '../../data-renders/item';
import { CheckElement } from '../check';
import { PopupElement } from '../../interactors/popup';

const NAME = 'select-popup';

@Element('m-' + NAME)
export class SelectPopupElement extends PopupElement {

    static css = css;

    _duration = 300;
    _triggerEvent = null;

    items: ItemElement[] = [];

    @Attr()
    multiple: boolean = false;

    content: ContentElement;
    select: SelectElement;

    contentTokens: any = () => [
        'div', {
            $if: this.#keyword && this.#foundCount === 0 && !this.select.addable,
            part: 'search-info',
            $text: 'Not Found'
        },
        'm-item', {
            class: 'xs',
            type: 'button',
            style: '--f-size: var(--f-sm); --py: 0.375rem;',
            $if: this.#keyword && !this.#matchKeyword && this.select.addable,
            $on: {
                click: () => {
                    this.select.addEmitter({
                        value: this.#keyword
                    });
                }
            }
        }, [
            'm-icon', {
                style: 'color: var(--f-fade)',
                name: 'add',
                slot: 'head'
            },
            '$text', { $text: this.#keyword }
        ]
    ];

    lightTemplate = new Template(() => [
        ...[].concat(...Array.from(this.select.options)
            .map((eachOption: OptionElement) => [
                'm-item', {
                    class: 'xs',
                    type: 'button',
                    style: '--f-size: var(--f-sm); --py: 0.375rem;',
                    empty: eachOption.empty,
                    selected: eachOption.selected,
                    disabled: eachOption.disabled,
                    $id: eachOption.value,
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
                        style: 'margin-left: 1rem',
                        checked: eachOption.selected,
                        disabled: eachOption.disabled,
                        $data: eachOption,
                        type: this.multiple ? 'checkbox' : 'radio',
                        $created: (check: CheckElement, node: TemplateNode) => {
                            check
                                .on('change', () => {
                                    if (this.multiple) {
                                        node.$data.selected = check.checked;
                                        if (this.select.outputText) {
                                            this.select.outputText.focus();
                                            if (this.#keyword) {
                                                this.search('');
                                            }
                                        }
                                        this.render();
                                    } else {
                                        node.$data.selected = check.checked;
                                        this.close();
                                    }
                                    this.select.changeEmitter(this.select.value);
                                    if (!this.select.dirty) {
                                        this.select.dirty = true;
                                    }
                                }, { passive: true })
                                .on('click', () => {
                                    if (!this.multiple && check.checked) {
                                        this.close();
                                    }
                                }, { passive: true });
                        }
                    }
                ]
            ])
        )
    ]);

    #foundCount: number = 0;
    #keyword: string;
    #matchKeyword = false;

    search(keyword: string) {
        this.#keyword = keyword = keyword.trim();
        this.#foundCount = 0;
        this.#matchKeyword = false;
        this.toggleAttribute('searching', !!keyword);
        if (keyword) {
            this.items.forEach((eachItem: ItemElement) => {
                const text = Array.from(eachItem.childNodes)
                    .map((eachNode) => eachNode.textContent)
                    .join('')
                    .trim();
                const found = text.indexOf(keyword) !== -1;
                if (found) this.#foundCount++;
                if (text === keyword) {
                    this.#matchKeyword = true;
                }
                eachItem
                    .toggleAttribute('found', found);
            });
        }
        if (this.select.outputText) {
            this.select.outputText.textContent = keyword;
        }
        this.render();
    }

    onSlotChange() {
        this.lightTemplate.render(this);
    }

    async onOpen() {
        super.onOpen();
        this.content.renderScroll();
        if (this.select.outputText) {
            // this.select.outputText.readOnly = false;
            this.select.outputText.focus();
        }
    }

    onClose() {
        super.onClose();
        if (this.select.outputText) {
            this.select.outputText.textContent = '';
        }
        this.select.focused = false;
        this.select.output();
    }

    onClosed() {
        super.onClosed();
        // if (this.select.outputText) {
        //     this.select.outputText.readOnly = true;
        // }
        this.#foundCount = 0;
        this.#keyword = '';
        this.toggleAttribute('searching', false);
        this.remove();
        this.select.popup = null;
    }

    render() {
        super.render();
        this.lightTemplate.render(this);
    }

    onDisconnected() {
        this.lightTemplate.remove();
    }

}
