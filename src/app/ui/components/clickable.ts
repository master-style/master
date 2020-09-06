import { Attr } from '@element';

export class MasterClickable extends HTMLElement {

    template = $(() => [
        (this.href && !this.disabled) ? 'a' : 'button', {
            part: 'shadow',
            disabled: this.disabled,
            type: this.type,
            href: this.href,
            download: this.download,
            rel: this.rel,
            target: this.target
        }, [
            'slot'
        ]
    ]);

    @Attr({ render: true })
    type: string;

    @Attr({ render: true })
    rel: string;

    @Attr({ render: true })
    href: string;

    @Attr({ render: true })
    disabled: boolean;

    @Attr()
    loading: boolean;

    @Attr({ render: true })
    download: number;

    @Attr({ render: true })
    target: string;

    render() {
        this.template.render(this.shadowRoot);
    }
}
