import { Element, Attr, ControlElement } from '@element';
import css from './index.scss';

const connectedChecks = new Set();
const updatingRadioNames = new Set();

const NAME = 'check';

@Element({
    tag: 'm-' + NAME,
    css
})
export class CheckElement extends ControlElement {

    controlTemplate = $(() => [
        'input', {
            part: 'body',
            type: this.type,
            name: this.name,
            disabled: this.disabled,
            required: this.required,
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = $(() => [
        'svg', {
            part: this.interface,
            viewBox: '0 0 20 20',
            $namespace: 'http://www.w3.org/2000/svg',
            $html: this.interface === 'switch'
                ? '<rect x=2 y=2 rx=8 width=16 height=16 part="button-icon"/><filter id="s" x="0" y="0" filterUnits="userSpaceOnUse"><feOffset dy="2" input="SourceAlpha"/><feGaussianBlur stdDeviation="1 1" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter>'
                : '<path part="check-icon" d="M5.5 10l2 2 1 1 6 -6"/><path part="ban-icon" d="M19 19L1 1h0"/>'
        },
        'slot'
    ]);

    body: any;

    @Attr({ observe: false, render: false })
    role: string;

    @Attr()
    name: string;

    @Attr({
        updater(check: CheckElement, value) {
            const parent: any = check.parentElement;
            if (parent.tagName === 'M-ITEM') {
                parent.disabled = value;
            }
        }
    })
    disabled: boolean;

    @Attr()
    required: boolean;

    @Attr()
    promptValid: string;

    @Attr()
    promptInvalid: string;

    @Attr()
    promptWarning: string;

    @Attr()
    autocomplete: string;

    @Attr()
    interface: string = 'check';

    @Attr({
        updater(check: CheckElement, value: any, oldValue: any) {
            check.role = value;
        }
    })
    type: string = 'checkbox';

    @Attr({
        updater(check: CheckElement, value: any, oldValue: any) {

            check.body.checked = value;
            check.toggleAttribute('aria-checked', !!value);

            if (updatingRadioNames.has(check.name)) return;

            if (check.type === 'radio' && check.name) {
                updatingRadioNames.add(check.name);
                connectedChecks
                    .forEach((eachCheck: CheckElement) => {
                        if (
                            eachCheck !== check
                            && eachCheck.name === check.name
                            && eachCheck.checked !== false
                        ) {
                            eachCheck.checked = false;
                        }
                    });
                updatingRadioNames.delete(check.name);
            }
            check.validate();
        }
    })
    checked: boolean;

    @Attr({
        reflect: false,
        render: false,
        updater(check: CheckElement, value: any, oldValue: any) {
            if (value === oldValue) return;
            check.body.value = value ?? null;
        }
    })
    value: any;

    onAdded() {
        this.validate();

        this.body
            .on('input', (event: any) => {
                this.checked = event.target.checked;
            }, { id: NAME, passive: true });

        connectedChecks.add(this);
    }

    onRemoved() {
        connectedChecks.delete(this);
        this.off({ id: NAME });
    }

}
