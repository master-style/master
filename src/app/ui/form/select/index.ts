import { Element, Attr, Event, ControlElement } from '@element';

import css from './index.scss';
import './popup';

import { OptionElement } from '../option';
import { SelectPopupElement } from './popup';

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

    popup: SelectPopupElement = $('m-select-popup', {});

    readonly options: OptionElement[] = this.popup.options = [];

    addOption(option: OptionElement) {
        this.options.push(option);
    }

    removeOption(option: OptionElement) {
        this.options.splice(this.options.indexOf(option), 1);
        this.output();
    }

    updateSelected(option?) {
        if (option) {
            if (option.selected && !this.multiple) {
                this.options.forEach((eachOption: OptionElement) => {
                    if (option !== eachOption && eachOption.selected) {
                        eachOption['_selected'] = false;
                    }
                });
            }
        }
    }

    output() {
        if (this.multiple) {
            // value and oldValue always not be same
            this.value = this.options
                .filter((eachOption: OptionElement) => eachOption.selected)
                .map((eachOption: OptionElement) => eachOption.value);
        } else {
            this.value = this.options
                .find((eachOption: OptionElement) => eachOption.selected)?.value;
        }
        this.body.value = Array.isArray(this.value) ? this.value.join(' , ') : this.value;
    }

    controlTemplate = $(() => [
        'input', {
            part: 'body',
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: true,
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        },
        // 'div', { part: 'output', $if: this.multiple }, [
        //     'div', { class: 'y:xs' }, () => {
        //         if (this.multiple && this.value) {
        //             return this.value.map((eachValue) => [
        //                 'm-chip', {
        //                     class: 'x sm theme+',
        //                     style: '--b-color: transparent',
        //                     $text: eachValue
        //                 },
        //             ]);
        //         } else {
        //             return [];
        //         }
        //     }
        // ]
    ]);

    template = $(() => [
        'slot',
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

    @Attr({
        updater(select: SelectElement, value: any) {
            ControlElement.valueUpdater(select, value);
            select.body.value = value;
            console.log(select.options, value);
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
            this.popup.open();
        }, { passive: true, id: this });
    }

}
