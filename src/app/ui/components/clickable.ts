import { Attr } from '@element';

export class MasterClickable extends HTMLElement {

    template = $(() => {
        const tag = (this.href && !this.disabled)
            ? 'a'
            : (this.type || this.disabled) ? 'button' : null;
        if (tag === 'button') {
            return [
                tag, {
                    part: 'shadow',
                    disabled: this.disabled,
                    type: this.type
                }, [
                    'slot'
                ]
            ];
        } else if (tag === 'a') {
            return [
                tag, {
                    part: 'shadow',
                    href: this.href,
                    download: this.download,
                    rel: this.rel,
                    target: this.target
                }, [
                    'slot'
                ]
            ];
        } else {
            return ['slot', { part: 'shadow' }];
        }
    });

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
