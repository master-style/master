import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

const NAME = 'button';
const SLOT = 'slot';

@Element('m-' + NAME)
export class MasterButtonElement extends HTMLElement {

    protected template = $(() => [
        this.href ? 'a' : 'button', {
            part: 'shadow',
            href: this.href,
            target: this.target,
            disabled: this.disabled,
            download: this.download,
            $html: '<slot>'
        }
    ]);

    // href first
    @Attr({ toggle: true, render: true })
    disabled: boolean;

    @Attr({ toggle: true })
    loading: boolean;

    @Attr({ render: true })
    href: string;

    @Attr({ render: true })
    download: string;

    @Attr({ render: true })
    target: string;

    constructor() {
        super();
        attachShadow(this, css);
    }

    onConnected() {
        this.template.render(this.shadowRoot);
    }

}
