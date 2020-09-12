import MasterControl from '../core';

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
            'legend'
        ]
    ]);

    @Attr({ observe: false })
    focused: boolean;

    @Attr({ observe: false })
    empty: boolean;

    protected valueHandler(value: any, oldValue: any) {
        if (this.type === 'number') {
            if (value === '') {
                value = 0;
            } else {
                value = isNaN(+value) ? value : +value;
            }
        }
        if (oldValue !== value) {
            this.empty = !value;
        }
        return { value, oldValue };
    }

    onConnected() {
        this
            .on('input', (event: any) => {
                this.value = event.target.value;
                console.log(event.target.value);
            }, { id: this })
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
