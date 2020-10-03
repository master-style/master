import { Element, Attr, ControlElement } from '@element';

import css from './index.scss';

const NAME = 'textarea';

@Element({
    tag: 'm-' + NAME,
    css
})
export class TextareaElement extends ControlElement {

    controlTemplate = $(() => [
        'textarea', {
            part: 'body',
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            rows: this.rows,
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = $(() => [
        'slot',
        'fieldset', [
            'legend', [
                'span', { part: 'label', $text: this.label }
            ]
        ],
        'label', { $text: this.label },
        'm-icon', {
            $if: this.busy,
            name: 'spinner',
            part: 'spinner'
        }
    ]);

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'textbox';

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr()
    type: string;

    @Attr({ render: false })
    expanded: boolean;

    @Attr({
        reflect: false,
        render: false,
        update: ControlElement.updateValue
    })
    value: any;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    rows: number = 1;

    onAdded() {
        this.validate();

        this
            .on('click', (event: any) => {
                if (event.target === this.body) return;
                this.body.focus();
            }, {
                id: NAME,
                passive: true
            });

        this.body.on('input', (event: any) => {
            this['value'] = event.target.value;
            if (!this.dirty) {
                this.dirty = true;
            }
        }, { id: NAME, passive: true })
            .on('focusout', () => {
                this.touched = true;
            }, { id: NAME, passive: true, once: true });
    }
}
