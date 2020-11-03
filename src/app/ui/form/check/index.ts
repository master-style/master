import { Element, Attr, ControlElement } from '../../../element';
import css from './check.scss';

const connectedChecks = new Set();

const nameMap = {};

const NAME = 'check';

@Element({
    tag: 'm-' + NAME,
    css
})
export class CheckElement extends ControlElement {

    controlTemplate = window['Master'](() => [
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

    template = window['Master'](() => [
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

    @Attr({
        update(check: CheckElement, value, oldValue) {
            if (value) {
                let checks = nameMap[value];
                if (!checks) checks = nameMap[value] = [];
                checks.push(check);
            }
            if (oldValue) {
                let oldChecks = nameMap[oldValue] || [];
                if (!oldChecks) oldChecks = nameMap[oldValue] = [];
                oldChecks.splice(oldChecks.indexOf(check), 1);
            }
        }
    })
    name: string;

    @Attr({
        update(check: CheckElement, value) {
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
        update(check: CheckElement, value: any, oldValue: any) {
            check.role = value;
        }
    })
    type: string = 'checkbox';

    @Attr({
        update(check: CheckElement, value: any, oldValue: any) {

            check.body.checked = value;
            check.toggleAttribute('aria-checked', !!value);

            if (check.type === 'radio' && check.name && value) {
                nameMap[check.name]
                    .forEach((eachCheck: CheckElement) => {
                        if (eachCheck !== check && eachCheck.type === 'radio') {
                            eachCheck.checked = false;
                        }
                    });
            }

            check.validate();
        }
    })
    checked: boolean = false;

    @Attr({
        reflect: false,
        render: false,
        update(check: CheckElement, value: any, oldValue: any) {
            if (value === oldValue) return;
            check.body.value = value ?? null;
        }
    })
    value: any;

    onConnected() {
        this.validate();

        this.body
            .on('input', (event: any) => {
                this.checked = event.target.checked;
            }, { id: NAME, passive: true });

        connectedChecks.add(this);
    }

    onDisconnected() {
        connectedChecks.delete(this);
        this.off({ id: NAME });
    }

}
