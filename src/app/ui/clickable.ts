import { Attr } from '../element';

type elementToken = string | { [key: string]: any };

export default class MasterClickable extends HTMLElement {

    slotTemplate: (elementToken | (() => elementToken[]))[];

    template = $(() => {
        const tag = (this.href && !this.disabled)
            ? 'a'
            : (this.type || this.disabled) ? 'button' : null;
        if (tag === 'button') {
            return [
                tag, {
                    class: 'touch',
                    part: 'root',
                    disabled: this.disabled,
                    type: this.type
                }, this.slotTemplate || ['slot']
            ];
        } else if (tag === 'a') {
            return [
                tag, {
                    class: 'touch',
                    part: 'root',
                    href: this.href,
                    download: this.download,
                    rel: this.rel,
                    target: this.target
                }, this.slotTemplate || ['slot']
            ];
        } else {
            return this.slotTemplate ? [
                'div', { part: 'root' },
                this.slotTemplate
            ] : ['slot', { part: 'root' }];
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

    @Attr({ render: true })
    download: number;

    @Attr({ render: true })
    target: string;

    static type = function (value, oldValue) {
        if (value === 'submit') {
            this.on('click', () => {
                this.closest('FORM').dispatchEvent(new Event('submit'));
            }, { id: this });
        } else if (oldValue === 'submit') {
            this.off({ id: this });
        }
    };

    render() {
        this.template.render(this.shadowRoot);
    }
}
