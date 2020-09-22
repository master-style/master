import { Attr } from '@element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    readonly elementName: string;

    body: any;

    template = $(() => [
        'slot'
    ]);

    @Attr({ observe: false, render: false })
    role: string;

    @Attr()
    name: string;

    @Attr()
    disabled: boolean;

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    required: boolean;

    @Attr()
    validate: string;

    @Attr()
    invalidate: string;

    @Attr()
    warning: string;

    @Attr()
    autocomplete: string;

    onRemoved() {
        this.off({ id: this.elementName });
    }

}
