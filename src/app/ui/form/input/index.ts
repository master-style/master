import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'input';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterInput extends HTMLElement {

    readonly elementName = NAME;

    controlTemplate = $(() => [
        'input', {
            part: 'body',
            type: this.type,
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            pattern: this.pattern,
            $created: (element: HTMLElement) => this.body = element
        }
    ]);

    template = $(() => [
        'slot',
        'fieldset', [
            'legend', [
                'span', { $text: this.label }
            ]
        ],
        'label', { $text: this.label }
    ]);

    body: any;

    @Attr({ observe: false, render: false })
    role: string = 'textbox';

    @Attr()
    name: string;

    @Attr()
    disabled: boolean;

    @Attr()
    required: boolean;

    @Attr()
    prompt: string;

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
        parser(input: MasterInput, value: any, oldValue: any) {
            if (input.type === 'number') {
                if (value === '') {
                    value = null;
                } else {
                    value = isNaN(+value) ? null : +value;
                }
            }
            return { value, oldValue };
        },
        updater(input: MasterInput, value: any) {
            input.empty = value === null || value === undefined || value === '';
            input.body.value = value ?? null;
        }
    })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr()
    autocomplete: string;

    @Attr()
    max: number;

    @Attr()
    min: number;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    pattern: string;

    @Attr()
    size: number;

    @Attr()
    step: number;

    onAdded() {
        this
            .on('click', (event: any) => {
                if (event.target === this.body) return;
                this.body.focus();
            }, { id: this.elementName, passive: true })
            .on('input', '[part=body]', (event: any) => {
                this.value = event.target.value;
            }, { id: this.elementName, passive: true });
    }

    render() {
        this.controlTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}
