import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

const NAME = 'button';
const SLOT = 'slot';

@Element('m-' + NAME)
export class MasterButtonElement extends HTMLElement {

    template = $(() => {
        return [
            this.href ? 'a' : 'button', {
                part: 'shadow',
                href: this.href,
                target: this.target,
                disabled: this.disabled,
                download: this.download,
                $html: '<slot>'
            }
        ]
    });

    @Attr({ render: true })
    href: string;

    // href first
    @Attr({ render: true })
    disabled: boolean;

    @Attr()
    loading: boolean;

    @Attr({ render: true })
    download: string;

    @Attr({ render: true })
    target: string;

    constructor() {
        super();
        attachShadow(this, css);
    }

    onConnected() {
        this.render();
    }

    render() {
        console.log(this.shadowRoot);
        this.template.render(this.shadowRoot);
    }

}
