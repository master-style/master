import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

const NAME = 'button';
const SLOT = 'slot';

@Element('m-' + NAME)
export class MasterButtonElement extends HTMLElement {

    @Attr({ render: true })
    href: string;

    // href first
    @Attr({ render: true })
    disabled: boolean;

    @Attr()
    loading: boolean;

    @Attr({ render: true })
    download = 'fuck';

    @Attr({ render: true })
    target: string;

    template = $(() => [
        this.href ? 'a' : 'button', {
            part: 'shadow',
            href: this.href,
            target: this.target,
            disabled: this.disabled,
            download: this.download,
            $html: '<slot>'
        }
    ]);

    constructor() {
        super();
        attachShadow(this, css);
    }

    render() {
        console.log('render');
        this.template.render(this.shadowRoot);
    }

}
