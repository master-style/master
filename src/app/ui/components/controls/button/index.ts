import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'button';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterButton extends HTMLElement {

    @Attr({ render: true })
    href: string;

    @Attr({ render: true })
    disabled: boolean;

    @Attr()
    loading: boolean;

    @Attr({ render: true })
    download: string;

    @Attr({ render: true })
    target: string;

    @Attr({ render: true })
    type: string;

    template = $(() => [
        this.href ? 'a' : 'button', {
            part: 'shadow',
            href: this.href,
            target: this.target,
            disabled: this.disabled,
            download: this.download,
            type: this.type,
            $html: '<slot>'
        }
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
