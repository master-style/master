import { Attr } from '../../../element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    slotTemplate: (elementToken | (() => elementToken[]))[];

    template = $(() => [
        'slot'
    ]);

    @Attr({ render: true })
    type: string;

    @Attr({ render: true })
    name: string;

    @Attr({ render: true })
    label: string;

    @Attr({ render: true })
    placeholder: string;

    @Attr({ render: true })
    disabled: boolean;

    @Attr({ render: true })
    required: boolean;

    @Attr({ render: true, key: 'readonly' })
    readOnly: boolean;

    @Attr({ render: true })
    validate: string;

    @Attr({ render: true })
    invalidate: string;

    @Attr({ render: true })
    warning: string;

    @Attr({ render: true })
    value: any;

    render() {
        this.template.render(this.shadowRoot);
    }
}
