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
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            pattern: this.pattern,
        }
    ]);

    template = $(() => {
        console.log(this.label);
        return [
            'slot',
            'fieldset', [
                'legend', [
                    'span', { $text: this.label }
                ]
            ],
            'm-label', { $text: this.label }
        ];
    });

    @Attr({ observe: false, render: false })
    empty: boolean;

    focused = false;

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
        this.controlTemplate.nodes[0].element.value = value ?? null;
    }

    onConnected() {
        this
            .on('click', (event: any) => {
                if (event.target.tagName === 'INPUT') return;
                this.controlTemplate.nodes[0].element.focus();
            }, { id: this, passive: true })
            .on('input', '[part=body]', (event: any) => {
                console.log('fuck');
                this.value = event.target.value;
            }, { id: this, passive: true });
        this.updateValue(this.value);
    }

    onDisconnected() {
        this.off('input', { id: this })
    }

    render() {
        console.log('render');
        this.template.render(this.shadowRoot);
        this.controlTemplate.render(this);
    }
}