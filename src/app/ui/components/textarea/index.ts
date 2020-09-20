import MasterControl from '@ui/shared/control';
import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'textarea';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterTextarea extends MasterControl {

    readonly masterName = NAME;

    bodyTemplate = $(() => [
        'textarea', {
            part: 'body',
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            rows: this.rows,
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
    autocomplete: string;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    rows: number = 1;

    render() {
        this.bodyTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}