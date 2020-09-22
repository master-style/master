import MasterControl from '@ui/form/control';
import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'select';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterSelect extends MasterControl {

    readonly elementName = NAME;

    _role = 'listbox';

    bodyTemplate = $(() => [
        'input', {
            part: 'body',
            'aria-hidden': true,
            tabindex: -1,
            name: this.name,
            required: this.required,
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
        parser(select: MasterSelect, value: any, oldValue: any) {
            if (select.type === 'number') {
                if (value === '') {
                    value = null;
                } else {
                    value = isNaN(+value) ? null : +value;
                }
            }
            return { value, oldValue };
        },
        updater(select: MasterSelect, value: any) {
            select.empty = value === null || value === undefined || value === '';
            select.body.value = value ?? null;
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
        this.bodyTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}
