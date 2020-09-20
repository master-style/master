import { Attr } from '@element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    readonly masterName: string;

    body: any;

    template = $(() => [
        'slot'
    ]);

    @Attr()
    type: string;

    @Attr()
    name: string;

    @Attr()
    label: string;

    @Attr()
    placeholder: string;

    @Attr()
    disabled: boolean;

    @Attr({ render: false })
    expanded: boolean;

    @Attr()
    required: boolean;

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    validate: string;

    @Attr()
    invalidate: string;

    @Attr()
    warning: string;

    @Attr({
        reflect: false,
        render: false,
        parser: (control: MasterControl, value: any, oldValue: any) => {
            if (control.type === 'number') {
                if (value === '') {
                    value = null;
                } else {
                    value = isNaN(+value) ? value : +value;
                }
            }
            return { value, oldValue };
        },
        updater: (control: MasterControl, value: any, oldValue: any) => {
            control.empty = value === null || value === undefined || value === '';
            control.body.value = value ?? null;
        }
    })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean;

    onConnected() {
        console.log(this.masterName);
        this
            .on('click', (event: any) => {
                if (event.target === this.body) return;
                this.body.focus();
            }, { id: this.masterName, passive: true })
            .on('input', '[part=body]', (event: any) => {
                this.value = event.target.value;
            }, { id: this.masterName, passive: true });
    }

    onDisconnected() {
        this.off({ id: this.masterName });
    }

}
