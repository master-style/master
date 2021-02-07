import { Attr } from '../attr';
import { capitalize } from '../../utils/capitalize';
import { MasterElement } from '../core';

const WHEN_ATTR_OPTIONS = { reflect: false, update: (control: ControlElement) => control.validate() };

export class ControlElement extends MasterElement {

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

    @Attr(WHEN_ATTR_OPTIONS)
    whenBadInput: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenCustomError: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenPatternMismatch: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenRangeOverflow: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenRangeUnderflow: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenStepMismatch: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenTooLong: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenTypeMismatch: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenValueMissing: string;

    @Attr(WHEN_ATTR_OPTIONS)
    whenValid: string;

    @Attr({ onRender: (control: ControlElement) => control.validate() })
    required: boolean;

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

        if (!this.ready) {
            return;
        }

        this.valid = this.validity.valid;
        this.invalid = !this.validity.valid;
        let prompt;

        for (const key in this.validity) {
            const eachWhether = this.validity[key];
            const eachPrompt = this['when' + capitalize(key)];

            if (eachPrompt !== undefined) {
                if (eachWhether) {
                    prompt = eachPrompt;
                    break;
                } else {
                    prompt = '';
                }
            }
        }

        if (prompt !== undefined) {
            this.prompt = prompt;
        } else {
            this.toggleAttribute('prompt', false);
        }
    }

    render() {
        (this as any).controlTemplate.render(this);
        (this as any).template.render(this.shadowRoot);
    }
}
