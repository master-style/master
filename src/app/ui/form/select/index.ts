import { Element, Attr, Event, ControlElement } from '@element';

import css from './index.scss';
import './popup';

import { OptionElement } from '../option';
import { SelectPopupElement } from './popup';
import { ItemElement } from '@ui/components/item';
import { ButtonElement } from '../button';

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
            const selectedOption = this.options
                .find((eachOption: OptionElement) => eachOption.selected);
            if (selectedOption) this.#selectedOptions = [selectedOption];
            this.value = selectedOption?.value;
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
            part: 'root',
            $created: (element: HTMLDivElement) => {
                element.on('click', () => {
                    if (this.disabled || !this.popup.hidden) return;
                    this.popup.select = this;
                    document.body.append(this.popup);
                    this.popup.open();
                }, { passive: true, id: this });
            }
        }, [
            'div', {
                part: 'body',
                placeholder: this.placeholder,
                label: this.label, // for default select width
                $text: this.value,
                $if: !this.multiple
            },
            'div', {
                $if: this.multiple,
                part: 'body',
                placeholder: this.placeholder,
                label: this.label, // for default select width
            }, () => this.#selectedOptions.map((eachOption: OptionElement) => [
                'm-chip', {
                    $if: this.multiple,
                    class: 'sm',
                    $html: eachOption.innerHTML
                        .replace('slot', 'part')
                }, [
                    'm-button', {
                        part: 'close',
                        $created: (element: ButtonElement) => {
                            element.on('click', (event) => {
                                event.stopPropagation();
                                eachOption.selected = false;
                                this.popup.render();
                                this.popup.updatePosition();
                            }, { passive: true, id: this });
                        }
                    }, [
                        'm-icon', { name: 'close' }
                    ]
                ]
            ]), [
                'input', {
                    $if: this.searchable,
                    part: 'search',
                    type: 'search',
                    placeholder: this.placeholder,
                    $created: (element: HTMLInputElement) =>
                        this.search = element
                            .on('input', (event: any) => {
                                this.popup.search(event.target.value);
                            }, { passive: true, id: NAME }),
                    $removed: () => this.search = null
                }
            ],
            'm-icon', {
                name: this.multiple ? 'caret' : 'unfold',
                part: 'icon'
            },
            'fieldset', [
                'legend', [
                    'span', { part: 'label', $text: this.label }
                ]
            ],
            'label', { $text: this.label }
        ]
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
            select.changeEmitter(value);
        },
        reflect: false
    })
    value: any;

    @Attr()
    autocomplete: string;

    onAdded() {
        this.uid = uid++;
    }

}
