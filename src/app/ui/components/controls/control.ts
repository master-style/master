import { Attr } from '../../../element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    slotTemplate: (elementToken | (() => elementToken[]))[];

    template = $(() => [
        ''
    ]);

    @Attr({ render: true })
    type: string;

    @Attr({ render: true })
    rel: string;

    @Attr({ render: true })
    href: string;

    @Attr({ render: true })
    disabled: boolean;

    @Attr({ render: true })
    download: number;

    @Attr({ render: true })
    target: string;

    render() {
        this.template.render(this.shadowRoot);
    }
}
