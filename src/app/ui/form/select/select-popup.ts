import { Element, Attr } from '../../../element';
import { OptionElement } from '../option';

import css from './select-popup.scss';

import { ContentElement } from '../../components/content';
import { SelectElement } from '.';
import { ItemElement } from '../../components/item';
import { CheckElement } from '../check';
import { PopupElement } from '../../components';

const NAME = 'select-popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectPopupElement extends PopupElement {

    _duration = 300;
    _triggerEvent = null;
    _placement = 'bottom-start';

    items: ItemElement[] = [];

    @Attr()
    multiple: boolean = false;

    content: ContentElement;
    select: SelectElement;

    contentTokens: any = () => [
        'div', {
            $if: this.#keyword && this.#foundCount === 0,
            part: 'search-info',
            $text: 'Not Found'
        }
    ];


    lightTemplate = window['Master'](() => [
        ...[].concat(...Array.from(this.select.options)
            .map((eachOption: OptionElement) => [
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
                        style: 'margin-left: 1rem',
                        checked: eachOption.selected,
                        $data: eachOption,
                        type: this.multiple ? 'checkbox' : 'radio',
                        $created: (check: CheckElement, node: TemplateNode) => {
                            check
                                .on('change', () => {
                                    if (this.multiple) {
                                        node.$data.selected = check.checked;
                                        if (this.select.search) this.select.search.focus();
                                        this.render();
                                    } else {
                                        this.close();
                                        node.$data.selected = check.checked;
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

    onSlotChange() {
        this.lightTemplate.render(this);
    }

    async onOpen() {
        super.onOpen();
        this.content.renderScroll();
        if (this.select.search) {
            // this.select.search.readOnly = false;
            this.select.search.focus();
        }
    }

    onClose() {
        super.onClose();
        if (this.select.search) {
            this.select.search.textContent = this.select.keyword = '';
        }
        this.select.focused = false;
        this.select.output();
    }

    onClosed() {
        super.onClosed();
        // if (this.select.search) {
        //     this.select.search.readOnly = true;
        // }
        this.#foundCount = 0;
        this.#keyword = '';
        this.toggleAttribute('searching', false);
        this.remove();
    }

    render() {
        super.render();
        this.lightTemplate.render(this);
    }

    removeRender() {
        this.lightTemplate.remove();
    }

}
