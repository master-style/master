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
        if (option.selected) {
            this.updateSelected(option);
        } else {
            this.updateValue();
        }
    }

    removeOption(option: OptionElement) {
        this.options.splice(this.options.indexOf(option), 1);
        this.updateValue();
    }

    updateValue() {
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

    updateSelected(option: OptionElement) {

        if (this.multiple) {

        } else {
            this.options.forEach((eachOption: OptionElement) => {
                if (option !== eachOption && eachOption.selected) {
                    eachOption['_selected'] = false;
                }
            });
        }
        this.updateValue();
    }

    controlTemplate = $(() => [
        'input', {
            'aria-hidden': true,
            tabindex: -1,
            name: this.name,
            required: this.required,
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
        'div', {
            part: 'body',
            placeholder: this.placeholder,
            label: this.label, // for default select width
        }, [
            'span', { $text: Array.isArray(this.value) ? this.value.join(' , ') : this.value }
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

    @Attr({
        updater(select: SelectElement, value: any) {
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
            this.popup.select = this;
            this.popup.open();
        }, { passive: true, id: this });
    }

}
