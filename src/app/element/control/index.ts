import { Attr } from '../attr';
import { capitalize } from '../../utils/capitalize';

export class ControlElement extends HTMLElement {

    validity: ValidityState;

    body: any;

    @Attr({ render: false })
    emit: boolean;

    @Attr()
    busy: boolean;

    @Attr()
    name: string;

    @Attr()
    disabled: boolean;

    @Attr()
    required: boolean;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenBadInput: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenCustomError: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenPatternMismatch: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenRangeOverflow: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenRangeUnderflow: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenStepMismatch: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenTooLong: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenTypeMismatch: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenValueMissing: string;

    @Attr({ reflect: false, update: (control: ControlElement) => control.validate() })
    whenValid: string;

    @Attr({ observe: false, render: false })
    prompt: string;

    @Attr({ observe: false, render: false })
    valid: boolean;

    @Attr({ observe: false, render: false })
    warning: boolean;

    @Attr({ observe: false, render: false })
    invalid: boolean;

    @Attr({ observe: false, render: false })
    dirty: boolean = false;

    @Attr({ observe: false, render: false })
    touched: boolean = false;

    validate() {

        if (!this['ready']) {
            return;
        }

        this.valid = this.validity.valid;
        this.invalid = !this.validity.valid;
        let hasPrompt = false;

        for (const key in this.validity) {
            const eachWhether = this.validity[key];
            const eachPrompt = this['when' + capitalize(key)];
            if (eachPrompt) {
                hasPrompt = true;
            }
            if (eachWhether && eachPrompt) {
                console.log(this, this.prompt, key, eachWhether);
                this.prompt = eachPrompt;
                return;
            }
        }

        if (!hasPrompt) {
            this.toggleAttribute('prompt', false);
        }
    }

    render() {
        (this as any).controlTemplate.render(this);
        (this as any).template.render(this.shadowRoot);
    }
}
