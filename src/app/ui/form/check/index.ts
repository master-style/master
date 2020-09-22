import MasterControl from '@ui/form/control';
import { Element, Attr } from '@element';
import css from './index.scss';

const connectedChecks = new Set();
const updatingRadioNames = new Set();

const NAME = 'check';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterCheck extends MasterControl {

    readonly elementName = NAME;

    bodyTemplate = $(() => [
        'input', {
            part: 'body',
            type: this.type,
            name: this.name,
            disabled: this.disabled,
            readonly: this.readOnly,
            required: this.required,
            $created: (element: HTMLElement) => this.body = element
        }
    ]);

    template = $(() => [
        'svg', {
            part: 'check',
            viewBox: '0 0 20 20',
            $namespace: 'http://www.w3.org/2000/svg',
            $html: '<path d="M5.5 10l2 2 1 1 6 -6">'
        },
        'slot'
    ]);

    @Attr({
        updater(check: MasterCheck, value: any, oldValue: any) {
            check.role = value;
        }
    })
    type: string = 'checkbox';

    @Attr({
        updater(check: MasterCheck, value: any, oldValue: any) {

            check.body.checked = value;
            check.toggleAttribute('aria-checked', !!value);

            if (updatingRadioNames.has(check.name)) return;

            if (check.type === 'radio' && check.name) {
                updatingRadioNames.add(check.name);
                connectedChecks
                    .forEach((eachCheck: MasterCheck) => {
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
        }
    })
    checked: boolean;

    @Attr()
    autocomplete: string;

    @Attr({
        reflect: false,
        render: false,
        updater(check: MasterCheck, value: any, oldValue: any) {
            if (value === oldValue) return;
            check.body.value = value ?? null;
        }
    })
    value: any;

    onAdded() {
        this.body
            .on('input', (event: any) => {
                this.checked = event.target.checked;
            }, { id: this.elementName, passive: true });

        connectedChecks.add(this);
    }

    onRemoved() {
        connectedChecks.delete(this);
    }

    render() {
        this.bodyTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}
