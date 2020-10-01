import { Element, Attr, Event, ControlElement } from '@element';

import css from './index.scss';
import './popup';

import { OptionElement } from '../option';
import { SelectPopupElement } from './popup';
import { ButtonElement } from '../button';

let uid = 0;

const NAME = 'select';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectElement extends ControlElement {

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
        'slot', {
            $created: (element: HTMLSlotElement) => {
                element.on('slotchange', (event) => {
                    this.composeValue();
                }, { passive: true, id: NAME });
            }
        },
        'div', {
            part: 'root',
            $created: (element: HTMLDivElement) => this.root = element
        }, [
            'div', {
                part: 'body',
                placeholder: this.placeholder,
                label: this.label.length > this.placeholder.length
                    ? this.label
                    : this.placeholder, // for default select width
            }, [
                'input', {
                    $if: this.multiple && this.searchable && !this.readOnly || !this.multiple,
                    part: 'search',
                    type: 'search',
                    spellcheck: 'false',
                    disabled: this.disabled,
                    readonly: this.readOnly || !this.searchable,
                    value: this.keyword,
                    placeholder: this.placeholder,
                    $created: (element: HTMLInputElement) => {
                        this.search = element
                            .on('input', (event: any) => {
                                if (this.searchable)
                                    this.popup.search(event.target.value);
                            }, { passive: true, id: NAME });
                    },
                    $removed: () => this.search = null
                }
            ], () => this.#selectedOptions.map((eachOption: OptionElement) => [
                'm-chip', {
                    $if: this.multiple,
                    class: 'sm',
                    $html: eachOption.innerHTML
                        .replace('slot', 'part')
                }, [
                    'm-button', {
                        $if: !this.readOnly && !this.disabled,
                        part: 'close',
                        $created: (element: ButtonElement) => {
                            element.on('click', (event) => {
                                event.stopPropagation();
                                eachOption.selected = false;
                                this.popup.render();
                                this.popup.updatePosition();
                            }, { passive: true, id: NAME });
                        }
                    }, [
                        'm-icon', { name: 'close' }
                    ]
                ]
            ]),
            'm-icon', {
                $if: this.busy,
                name: 'spinner',
                part: 'spinner'
            },
            'm-icon', {
                $if: !this.readOnly,
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

    @Attr({ key: 'tabindex' })
    tabIndex = 0;

    @Attr({ observe: false })
    focused: boolean = false;

    @Event()
    changeEmitter: EventEmitter;

    uid: number;

    root: HTMLDivElement;
    popup: SelectPopupElement;
    search: HTMLInputElement;
    searchInfo: HTMLElement;

    keyword: string;

    #selectedOptions: OptionElement[] = [];

    #options: OptionElement[] = [];

    options = {
        get: () => {
            return this.#options;
        },
        set: (options: OptionElement[]) => {
            this.#options = options;
            this.composeValue();
        },
        add: (option: OptionElement) => {
            this.#options.push(option);
            this.composeValue();
        },
        remove: (option: OptionElement) => {
            this.#options.splice(this.#options.indexOf(option), 1);
            this.composeValue();
        },
        clear: () => {
            this.#options = [];
            this.composeValue();
        }
    };

    composeValue() {
        if (this.multiple) {
            // value and oldValue always not be same
            this.#selectedOptions = this.#options
                .filter((eachOption: OptionElement) => eachOption.selected);
            this.value = this.#selectedOptions
                .map((eachOption: OptionElement) => eachOption.value);
        } else {
            const selectedOption = this.#options
                .find((eachOption: OptionElement) => eachOption.selected);
            if (selectedOption) this.#selectedOptions = [selectedOption];
            this.value = selectedOption?.value;
        }
        if (this.popup) {
            if (!this.popup.hidden) {
                this.popup.render();
                this.popup.updatePosition();
            }
        }
    }

    private toggleListener() {
        if (this.readOnly || this.disabled) {
            this.root.off({ passive: true, id: NAME });
        } else {
            this.root.on('click', () => {
                if (this.disabled || this.popup && !this.popup.hidden) return;
                this.popup = $('m-select-popup', {
                    multiple: this.multiple,
                    hidden: true
                });
                this.popup.select = this;
                document.body.append(this.popup);
                this.popup.open();
            }, { passive: true, id: NAME });
        }
    }

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'listbox';

    @Attr({
        key: 'readonly',
        update: (select: SelectElement) => select.toggleListener()
    })
    readOnly: boolean = false;

    @Attr({
        update: (select: SelectElement) => select.toggleListener()
    })
    disabled: boolean = false;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr({
        update(select: SelectElement, value) {
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
        update(select: SelectElement, value: any) {
            const isArray = Array.isArray(value);
            select.options.get().forEach((eachOption) => {
                if (
                    isArray && value.indexOf(eachOption.value) !== -1
                    || value === eachOption.value
                ) {
                    eachOption.selected = true;
                }
            });
            ControlElement.updateValue(select, value);
            select.body.value = value;
            if (!select.multiple) {
                select.search.value = value || '';
            }
            select.changeEmitter(value);
        },
        reflect: false
    })
    value: any;

    @Attr()
    autocomplete: string;

    onAdded() {
        this.uid = uid++;
        this
            .on('focusin', () => {
                this.focused = true;
            }, { passive: true, id: NAME })
            .on('focusout', () => {
                console.log(this.popup?.hidden);
                if (!this.popup?.hidden) return;
                this.focused = false;
            }, { passive: true, id: NAME });
    }

    onRemoved() {
        this.off({ id: NAME });
    }

}
