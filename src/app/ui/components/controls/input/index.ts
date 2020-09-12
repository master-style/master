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
            part: 'body',
            type: this.type,
            name: this.name,
            label: this.label,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readOnly: this.readOnly,
            pattern: this.pattern,
            validate: this.validate,
            invalidate: this.invalidate,
            warning: this.warning
        }
    ]);

    template = $(() => [
        'slot',
        'fieldset', [
            'legend', { $html: '<span>' + this.label + '</span>' }
        ],
        'm-label', { $html: this.label }
    ]);

    @Attr({ observe: false, render: false })
    empty: boolean;

    protected valueHandler(value: any, oldValue: any) {
        if (this.type === 'number') {
            if (value === '') {
                value = null;
            } else {
                value = isNaN(+value) ? value : +value;
            }
        }
        if (this.isConnected && value !== oldValue) {
            this.updateValue(value);
        }
        return { value, oldValue };
    }

    protected updateValue(value: number) {
        this.empty = value === null || value === undefined;
        this.controlTemplate.nodes[0].element.value = value;
    }

    onConnected() {
        this
            .on('input', (event: any) => {
                this.value = event.target.value;
            }, { id: this });
        this.updateValue(this.value);
    }

    onDisconnected() {
        this.off('input', { id: this })
    }

    render() {
        this.template.render(this.shadowRoot);
        this.controlTemplate.render(this);
    }
}

console.log(HTMLInputElement.prototype);
