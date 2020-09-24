import { Attr } from '../attr';

const NAME = 'control';

export class ControlElement extends HTMLElement {

    static valueUpdater(control: any, value: any) {
        control.empty = value === null || value === undefined || value === '';
        control.body.value = value ?? null;
        control.validate();
    }

    validity: ValidityState;

    body: any;

    @Attr()
    name: string;

    @Attr()
    disabled: boolean;

    @Attr()
    required: boolean;

    @Attr()
    promptValid: string;

    @Attr()
    promptWarning: string;

    @Attr()
    promptInvalid: string;

    @Attr({ observe: false, render: false })
    valid: boolean;

    @Attr({ observe: false, render: false })
    warning: boolean;

    @Attr({ observe: false, render: false })
    invalid: boolean;

    @Attr({ observe: false, render: false })
    dirty: boolean;

    validate() {
        this.valid = this.validity.valid;
        this.invalid = !this.validity.valid;
    }

    onRemoved() {
        this.off({ id: NAME });
    }

    render() {
        (this as any).controlTemplate.render(this);
        (this as any).template.render(this.shadowRoot);
    }
}
