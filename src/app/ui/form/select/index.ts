import { Element, Attr, Event, ControlElement } from '@element';

import css from './index.scss';
import './popup';

import { OptionElement } from '../option';
import { SelectPopupElement } from './popup';
import { ItemElement } from '@ui/components/item';

let uid = 0;

const NAME = 'select';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectElement extends ControlElement {

    @Attr({ key: 'tabindex' })
    tabIndex = 0;

    @Event()
    changeEmitter: EventEmitter;

    uid: number;

    popup: SelectPopupElement = $('m-select-popup', {});
    search: HTMLInputElement;
    searchInfo: HTMLElement;

    keyword: string;

    readonly options: OptionElement[] = this.popup.options = [];

    #selectedOptions: OptionElement[] = [];

    addOption(option: OptionElement) {
        this.options.push(option);
    }

    removeOption(option: OptionElement) {
        this.options.splice(this.options.indexOf(option), 1);
    }

    composeValue() {
        if (this.multiple) {
            // value and oldValue always not be same
            this.#selectedOptions = this.options
                .filter((eachOption: OptionElement) => eachOption.selected);
            this.value = this.#selectedOptions
                .map((eachOption: OptionElement) => eachOption.value);
        } else {
            this.#selectedOptions = [this.options
                .find((eachOption: OptionElement) => eachOption.selected)];
            this.value = this.#selectedOptions[0]?.value;
        }
    }

    controlTemplate = $(() => [
        'input', {
            part: 'output',
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = $(() => [
        'slot',
        'div', {
            part: 'body',
            placeholder: this.placeholder,
            label: this.label, // for default select width
        }, [
            'span', {
                $if: !this.multiple || !Array.isArray(this.value),
                $text: this.value
            },
            'div', {
                $if: this.multiple || this.multiple && this.searchable,
                class: 'y:xs'
            }, () => (this.#selectedOptions as any).map((eachOption: OptionElement) => [
                'm-chip', {
                    class: 'x sm',
                    $html: eachOption.innerHTML
                        .replace('slot', 'part')
                }, [
                    'm-button', { part: 'close' }, [
                        'm-icon', { name: 'close' }
                    ]
                ]
            ]).concat([
                'input', {
                    class: 'x',
                    part: 'search',
                    type: 'search',
                    placeholder: this.placeholder,
                    value: this.keyword,
                    $created: (element: HTMLInputElement) =>
                        this.search = element
                            .on('input', (event: any) => {
                                this.keyword = event.target.value;
                                this.search.css('width', this.keyword.length + 'rem');
                                this.popup.toggleAttribute('searching', !!this.keyword);
                                this.popup.items.forEach((eachItem: ItemElement) => {
                                    eachItem
                                        .toggleAttribute('found', eachItem.textContent.indexOf(this.keyword) !== -1);
                                });
                                this.searchInfo = $('div', {
                                    part: 'search-info'
                                }, 'Not Found');
                            }, { passive: true, id: NAME }),
                    $removed: () => this.search = null
                },
            ])
        ],
        'm-icon', {
            name: this.multiple ? 'caret' : 'unfold',
            part: 'select'
        },
        'fieldset', [
            'legend', [
                'span', { part: 'label', $text: this.label }
            ]
        ],
        'label', { $text: this.label }
    ]);

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'listbox';

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr({
        updater(select: SelectElement, value) {
            if (select.popup) {
                select.popup.multiple = value;
            }
        }
    })
    multiple: boolean = false;

    @Attr({ render: false })
    expanded: boolean;

    @Attr()
    searchable: boolean;

    @Attr({
        updater(select: SelectElement, value: any) {
            const isArray = Array.isArray(value);
            select.options.forEach((eachOption) => {
                if (
                    isArray && value.indexOf(eachOption.value) !== -1
                    || value === eachOption.value
                ) {
                    eachOption.selected = true;
                }
            });
            ControlElement.valueUpdater(select, value);
            select.body.value = value;
        },
        reflect: false
    })
    value: any;

    @Attr()
    autocomplete: string;

    onAdded() {
        this.on('click', () => {
            if (this.disabled) return;
            this.popup.select = this;
            document.body.append(this.popup);
            this.popup.toggle();
        }, { passive: true, id: this });
        this.uid = uid++;
    }

}
