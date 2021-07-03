import { Element, Attr, Event, EventEmitter } from '@master/element';
import { $ } from '@master/dom';
import { Template } from '@master/template';


import css from './select.scss';
import './select-popup';

import { ControlElement } from '../../shared/control';
import { OptionElement } from '../option';
import { SelectPopupElement } from './select-popup';

let uid = 0;

const NAME = 'select';


@Element('m-' + NAME)
export class SelectElement extends ControlElement {

    static css = css;

    lightTemplate = new Template(() => [
        'input', {
            role: 'assignee',
            name: this.name,
            disabled: this.disabled,
            required: this.required,
            hidden: true,
            $created: (element: HTMLInputElement) => {
                this.assignee = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = new Template(() => [
        'slot', {
            $created: (slot) => slot.on('slotchange', () => {
                this.options = new Set(
                    Array.from(this.children)
                        .filter((eachChild) => eachChild.tagName === 'M-OPTION') as OptionElement[]
                );

                this.selectOptionByValue(this.value);

                if (this.popup) {
                    this.popup.render();
                }
            }, { passive: true })
        },
        'div', {
            part: 'master',
            $created: (element: HTMLDivElement) => this.master = element
        }, [
            'div', { part: 'body' }, [
                'div', { part: 'output' }, [
                    'span', {
                        $if: this.multiple && this.searchable && !this.readOnly || !this.multiple,
                        part: 'output-text',
                        contenteditable: !this.readOnly && this.searchable && !this.disabled,
                        spellcheck: 'false',
                        disabled: this.disabled,
                        'aria-placeholder': this.placeholder,
                        $created: (element) => {
                            this.outputText = element
                                .on('input', () => {
                                    if (this.searchable)
                                        this.popup.search(this.outputText.textContent);
                                }, { passive: true, id: [NAME] });
                        },
                        $removed: () => this.outputText = null
                    }
                ],
                () => this.selectedOptions
                    .map((eachOption: OptionElement) => [
                        'm-chip', {
                            part: 'output-item',
                            $if: this.multiple,
                            $id: eachOption.value,
                            class: 'sm filled theme+'
                        }, () =>
                            Array.from(eachOption.childNodes)
                                .filter(({ nodeType }) => nodeType === Node.ELEMENT_NODE || nodeType === Node.TEXT_NODE)
                                .map((node: Text | Element) => node instanceof Text
                                    ? ['span', { $text: node.textContent, part: 'output-item-name' }]
                                    : [node.tagName, { $html: node.innerHTML, slot: false, part: node.slot }]
                                )
                        , [
                            'm-button', {
                                $if: !this.readOnly && !this.disabled,
                                part: 'close',
                                class: 'square',
                                $on: {
                                    click: (event) => {
                                        event.stopPropagation();
                                        eachOption.selected = false;
                                        this.changeEmitter(this.value);
                                        this.popup?.render();
                                    }
                                }
                            }, [
                                'm-icon', { name: 'cross' }
                            ]
                        ]
                    ]),
            ],
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

    @Event({ force: true, bubbles: true })
    addEmitter: EventEmitter;

    @Event({ force: true, bubbles: true })
    changeEmitter: EventEmitter;

    @Attr({ key: 'tabindex' })
    tabIndex = 0;

    @Attr({ observe: false })
    focused: boolean = false;

    @Attr()
    addable: boolean;

    uid: number;

    master: HTMLDivElement;
    popup: SelectPopupElement;
    outputText: HTMLInputElement;
    searchInfo: HTMLElement;
    updating: boolean;

    mutationObserver = new MutationObserver((mutations) => {
        let textChanged = false;
        mutations.forEach((eachMutationRecord) => {
            if (eachMutationRecord.type === 'characterData') {
                textChanged = true;
            }
        })

        if (textChanged) {
            this.render();
            this.output();
            if (this.popup) {
                this.popup.render();
            }
        }
    });

    options: Set<OptionElement> = new Set();

    get selectedOptions(): OptionElement[] {
        const selectedOptions = [];
        this.options.forEach((eachOption) => {
            if (eachOption.selected) {
                selectedOptions.push(eachOption);
            };
        });
        return selectedOptions;
    }

    selectOptionByValue(value) {
        this.options.forEach((eachOption) => {
            if (this.multiple) {
                if (!Array.isArray(value)) return;
                if (
                    this.binding
                        ? value.find((eachEntity) => eachEntity[this.binding] === eachOption.value[this.binding])
                        : value.indexOf(eachOption.value) !== -1
                ) {
                    eachOption.selected = true;
                } else {
                    eachOption.selected = false;
                }
            } else {
                // value = x
                if (
                    this.binding
                        ? value[this.binding] === eachOption.value[this.binding]
                        : value === eachOption.value
                ) {
                    eachOption.selected = true;
                }
            }
        });
        this.output();
    }

    composeValue() {
        const selectedOptions = this.selectedOptions;
        if (this.multiple) {
            this.value = selectedOptions
                .map((eachOption: OptionElement) => eachOption.value);
        } else {
            this.value = selectedOptions[0]?.value;
        }

        if (this.popup) {
            if (!this.popup.hidden) {
                this.popup.render();
            }
        }
    }

    private toggleListener() {
        if (this.readOnly || this.disabled) {
            this.off({ passive: true, id: [NAME] });
        } else {
            this.on('click', () => {
                if (this.disabled || this.popup) return;
                this.popup = $('m-select-popup', {
                    multiple: this.multiple,
                    placement: this.placement,
                    hidden: true,
                    'will-lock': true,
                    'min-width': 'trigger'
                });
                this.popup.select = this;
                document.body.append(this.popup);
                this.popup.trigger = this;
                this.popup.open();
            }, { passive: true, id: [NAME] });
        }
    }

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'listbox';

    @Attr()
    binding: string;

    @Attr({
        onUpdate(this: SelectElement) { this.toggleListener() }
    })
    readOnly: boolean = false;

    @Attr({
        onUpdate(this: SelectElement) { this.toggleListener() }
    })
    disabled: boolean = false;

    @Attr()
    placeholder: string;

    @Attr()
    placement = 'bottom-start';

    @Attr()
    label: string;

    @Attr({
        onUpdate(select: SelectElement, value) {
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
            const option = this.selectedOptions[0];
            const optionText =
                option
                    ? Array.from(option.childNodes)
                        .filter((eachNode: any) => !eachNode.slot && eachNode.nodeName !== '#comment')
                        .map((eachNode) => eachNode.textContent)
                        .join(' ')
                        .trim()
                    : '';
            this.outputText.textContent = optionText || '';
        }
    }

    @Attr({
        onUpdate(select: SelectElement, value: any, oldValue: any) {
            const isArray = Array.isArray(value);
            const oldIsArray = Array.isArray(oldValue);
            let equal = true;
            if (isArray && oldIsArray && value.length === oldValue.length) {
                for (let i = 0; i < value.length; ++i) {
                    const each = value[i];
                    const eachOld = oldValue[i];
                    if (
                        each !== eachOld || (
                            select.binding
                                ? each[select.binding] !== eachOld[select.binding]
                                : each !== eachOld
                        )
                    ) {
                        equal = false;
                        break;
                    }
                }
                if (equal) return;
            }
            select.empty = value === null || value === undefined || value === '' || isArray && !value.length;
            // don't assign empty array that will be valid
            select.assignee.value = select.empty ? '' : value;
            select.validate();
            select.selectOptionByValue(value);
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
            }, { passive: true, id: [NAME] })
            .on('focusout', () => {
                if (!this.touched) {
                    this.touched = true;
                }
                if (this.popup?.hidden === false) return;
                this.focused = false;
            }, { passive: true, id: [NAME] });

        this.mutationObserver.observe(this, {
            characterData: true,
            childList: true,
            subtree: true
        })
    }

    onDisconnected() {
        this.off({ id: [NAME] });
        this.mutationObserver.disconnect();
    }

}
