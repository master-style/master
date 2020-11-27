import { Element, Attr, Event, ControlElement, Prop } from '../../../element';

import css from './select.scss';
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

    controlTemplate = window['Master'](() => [
        'input', {
            part: 'output',
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = window['Master'](() => [
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
                label: this.label?.length > this.placeholder?.length
                    ? this.label
                    : this.placeholder, // for default select width
            }, [
                'span', {
                    $if: this.multiple && this.searchable && !this.readOnly || !this.multiple,
                    part: 'search',
                    type: 'search',
                    contenteditable: !this.readOnly && this.searchable && !this.disabled,
                    spellcheck: 'false',
                    disabled: this.disabled,
                    placeholder: this.placeholder,
                    $text: this.keyword,
                    $created: (element: HTMLInputElement) => {
                        this.search = element
                            .on('input', () => {
                                if (this.searchable)
                                    this.popup.search(this.search.textContent);
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
                        $on: {
                            click: (event) => {
                                event.stopPropagation();
                                eachOption.selected = false;
                                this.popup.render();
                                this.popup.updatePosition();
                            }
                        }
                    }, [
                        'm-icon', { name: 'cross' }
                    ]
                ]
            ]),
            'fieldset', [
                'legend', [
                    'span', { part: 'label', $text: this.label }
                ]
            ],
            'label', { $text: this.label },
            'div', { part: 'foot' }, [
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
            ],
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
        selected: () => this.#selectedOptions,
        get: () => this.#options,
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
            // 強制 output，暫時解決 "m-option 元素無法取得 textContent 內容" 不明問題
            this.output();
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
            this.off({ passive: true, id: NAME });
        } else {
            this.on('click focusin', () => {
                if (this.disabled || this.popup && !this.popup.hidden) return;
                console.log(this.readOnly || !this.searchable);
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

    output() {
        if (!this.multiple) {
            this.search.textContent = this.#selectedOptions[0]?.textContent.trim() || '';
        }
    }

    @Attr({
        update(select: SelectElement, value: any, oldValue: any) {
            const isArray = Array.isArray(value);
            const oldIsArray = Array.isArray(oldValue);
            let equal = true;
            if (isArray && oldIsArray) {
                for (let i = 0; i < value.length; ++i) {
                    if (value[i] !== oldValue[i]) {
                        equal = false;
                        break;
                    }
                }
                if (equal) return;
            }
            select.options.get().forEach((eachOption) => {
                if (
                    isArray && value.indexOf(eachOption.value) !== -1
                    || value === eachOption.value
                ) {
                    eachOption.selected = true;
                }
            });
            select.empty = value === null || value === undefined || value === '' || !value?.length;
            select.body.value = value;
            select.validate();
            select.output();
            select.changeEmitter(value);
        },
        reflect: false
    })
    value: any;

    @Attr()
    autocomplete: string;

    onConnected() {
        this.validate();
        this.uid = uid++;
        this
            .on('focusin', () => {
                this.focused = true;
            }, { passive: true, id: NAME })
            .on('focusout', () => {
                console.log(this.popup?.hidden);
                if (!this.touched) {
                    this.touched = true;
                }
                if (this.popup?.hidden === false) return;
                this.focused = false;
            }, { passive: true, id: NAME });
    }

    onDisconnected() {
        this.off({ id: NAME });
    }

}
