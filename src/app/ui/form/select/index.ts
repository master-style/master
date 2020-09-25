import { Element, Attr, ControlElement } from '@element';
import { isClickedOutside } from '@utils/is-clicked-outside';

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

    popup: SelectPopupElement = $('m-select-popup', {});

    readonly #options = this.popup.options = [];

    get options() {
        return this.#options;
    }

    add(option: OptionElement) {
        this.#options.push(option);
        this.updateValue();
    }

    delete(option: OptionElement) {
        this.#options.splice(this.#options.indexOf(option), 1);
    }

    updateValue() {
        if (this.multiple) {
            // value and oldValue always not be same
            this.value = this.#options
                .filter((eachOption) => eachOption.selected)
                .map((eachOption) => eachOption.value);
        } else {
            this.value = this.#options
                .find((eachOption) => eachOption.selected)?.value;
        }
        const event = new CustomEvent('change', {

        });
        this.dispatchEvent(event);
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
        }
    ]);

    template = $(() => [
        'slot',
        'div', {
            part: 'body',
            placeholder: this.placeholder,
            label: this.label, // for default select width
            $text: this.value
        },
        'm-icon', { name: 'unfold' },
        'fieldset', [
            'legend', [
                'span', { $text: this.label }
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
            console.log(select.value);
        },
        reflect: false
    })
    value: any;

    @Attr()
    autocomplete: string;

    onAdded() {
        this.on('focus', async (focusEvent) => {
            this.popup.select = this;
            document.body.append(this.popup);
            await this.popup.open();
            document.body
                .on('click', async (clickEvent: Event) => {
                    if (clickEvent.target === this.popup) return;
                    if (isClickedOutside(clickEvent, this.popup)) {
                        // 待改寫成 hook close 事件
                        document.body.off({ id: this });
                        await this.popup.close();
                    }
                }, { passive: true, id: this });
        }, { passive: true, id: this });
    }

}
