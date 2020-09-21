import MasterControl from '@ui/shared/control';
import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'textarea';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterTextarea extends MasterControl {

    readonly elementName = NAME;

    bodyTemplate = $(() => [
        'textarea', {
            part: 'body',
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            rows: this.rows,
            value: this.value,
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
        updater(textarea: MasterTextarea, value: any, oldValue: any) {
            console.log('textarea updater');
            textarea.empty = value === null || value === undefined || value === '';
            textarea.body.value = value ?? null;
        }
    })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr()
    autocomplete: string;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    rows: number = 1;

    onConnected() {
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
        this.bodyTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}