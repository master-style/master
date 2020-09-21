import MasterControl from '@ui/shared/control';
import { Element, Attr } from '@element';
import css from './index.scss';

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

    @Attr()
    type: string = 'checkbox';

    @Attr({
        updater(check: MasterCheck, value: any, oldValue: any) {
            check.body.checked = value;
            check.toggleAttribute('aria-checked', !!value);

            if (check.type === 'radio' && check.name) {
                document.getElementsByName(check.name)
                    .forEach((eachCheck: MasterCheck) => {
                        if (
                            eachCheck !== check
                            && eachCheck.tagName === 'M-CHECK'
                        ) {
                            eachCheck.checked = false;
                        }
                    });
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
            console.log(check);
            console.log(':', value, ':', oldValue);
            check.body.value = value ?? null;
        }
    })
    value: any;

    onConnected() {
        this
            .on('input', '[part=body]', (event: any) => {
                this.checked = event.target.checked;
            }, { id: this.elementName, passive: true });
    }

    render() {
        this.bodyTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}
