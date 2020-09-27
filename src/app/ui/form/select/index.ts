import { Element, Attr, Event, ControlElement } from '@element';

import css from './index.scss';
import './popup';

import { OptionElement } from '../option';
import { SelectPopupElement } from './popup';

let uid = 0;

const NAME = 'select';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectElement extends ControlElement {

    @Attr({ key: 'tabindex' })
    tabIndex = -1;

    @Event()
    changeEmitter: EventEmitter;

    uid: number;

    popup: SelectPopupElement = $('m-select-popup', {});
    search: HTMLElement;

    #searchValue: string;

    readonly options: OptionElement[] = this.popup.options = [];

    addOption(option: OptionElement) {
        this.options.push(option);
    }

    removeOption(option: OptionElement) {
        this.options.splice(this.options.indexOf(option), 1);
    }

    composeValue() {
        if (this.multiple) {
            // value and oldValue always not be same
            this.value = this.options
                .filter((eachOption: OptionElement) => eachOption.selected)
                .map((eachOption: OptionElement) => eachOption.value);
        } else {
            this.value = this.options
                .find((eachOption: OptionElement) => eachOption.selected)?.value;
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
            }, () => (this.value || []).map((eachValue: any) => [
                'm-chip', {
                    class: 'x sm',
                    $text: eachValue
                }
            ]).concat([
                'input', {
                    class: 'x',
                    part: 'search',
                    type: 'search',
                    placeholder: this.placeholder,
                    value: this.#searchValue,
                    $created: (element: HTMLInputElement) =>
                        this.search = element
                            .on('input', (event: any) => {
                                this.#searchValue = event.target.value;
                                this.search.css('width', this.#searchValue.length + 'rem');
                            }, { passive: true, id: NAME })
                },
            ])
        ],
        'm-icon', { name: 'unfold' },
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

    @Attr()
    multiple: boolean;

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
        this.on('click', async () => {
            if (this.disabled) return;
            this.popup.select = this;
            document.body.append(this.popup);
        }, { passive: true, id: this });
        this.uid = uid++;
    }

}
