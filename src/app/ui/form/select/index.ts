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

    readonly options: OptionElement[] = this.popup.options = [];

    addOption(option: OptionElement) {
        this.options.push(option);
    }

    removeOption(option: OptionElement) {
        this.options.splice(this.options.indexOf(option), 1);
    }

    updateValue() {
        if (this.multiple) {
            // value and oldValue always not be same
            this['_value'] = this.options
                .filter((eachOption: OptionElement) => eachOption.selected)
                .map((eachOption: OptionElement) => eachOption.value);
        } else {
            this['_value'] = this.options
                .find((eachOption: OptionElement) => eachOption.selected)?.value;
        }
        this.output();
    }

    output() {
        ControlElement.valueUpdater(this, this.value);
        this.body.value = (Array.isArray(this.value)
            ? this.value.join(' , ')
            : this.value
        ) || '';
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
        // 'div', { part: 'updateValue', $if: this.multiple }, [
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
            const isArray = Array.isArray(value);
            select.options.forEach((eachOption) => {
                if (
                    isArray && value.indexOf(eachOption.value) !== -1
                    || value === eachOption.value
                ) {
                    eachOption.selected = true;
                }
            });
            select.output();
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
        this.uid = uid++;
    }

}
