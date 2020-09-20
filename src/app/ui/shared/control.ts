import { Attr } from '@element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    controlElement: any;

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

    @Attr({ reflect: false, render: false })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean;

    protected valueUpdater(value) {
        this.empty = value === null || value === undefined || value === '';
        this.controlElement.value = value ?? null;
    }

}