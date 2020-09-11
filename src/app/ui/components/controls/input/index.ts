import MasterControl from '../control';

import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'input';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterInput extends MasterControl {

    controlTemplate = $(() => [
        'input', {
            slot: 'body',
            type: this.type,
            name: this.name,
            label: this.label,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readOnly: this.readOnly,
            validate: this.validate,
            invalidate: this.invalidate,
            warning: this.warning
        }
    ]);

    template = $(() => [
        'div', { part: 'root' }, [
            'slot', { name: 'head' },
            'slot', { name: 'body' },
            'slot', { name: 'foot' },
        ],
        'fieldset', [
            'legend'
        ]
    ]);

    render() {
        this.template.render(this.shadowRoot);
        this.controlTemplate.render(this);
    }
}
