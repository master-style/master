import MasterControl from '@ui/shared/control';
import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'textarea';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterTextarea extends MasterControl {

    controlTemplate = $(() => [
        'textarea', {
            part: 'body',
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            $created: (element: HTMLElement) => this.controlElement = element
        }
    ]);

    template = $(() => [
        'slot',
        'fieldset', [
            'legend', [
                'span', { $text: this.label }
            ]
        ],
        'm-label', { $text: this.label }
    ]);

    @Attr()
    autocomplete: string;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    onConnected() {
        this
            .on('click', (event: any) => {
                if (event.target.tagName === 'INPUT') return;
                this.controlTemplate.nodes[0].element.focus();
            }, { id: this, passive: true })
            .on('textarea', '[part=body]', (event: any) => {
                this.value = event.target.value;
            }, { id: this, passive: true });
        this.valueUpdater(this.value);
    }

    onDisconnected() {
        this.off('textarea', { id: this });
    }

    render() {
        this.controlTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}