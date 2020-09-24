import { Attr } from '@element';

type elementToken = string | { [key: string]: any };

export class ClickableElement extends HTMLElement {

    slotTemplate: (elementToken | (() => elementToken[]))[];

    template = $(() => {
        const tag = ((this.href || this.type === 'anchor') && !this.disabled)
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
            return this.slotTemplate
                ? [
                    'div', {
                        part: 'root'
                    },
                    this.slotTemplate
                ]
                : [
                    'slot', {
                        part: 'root'
                    }
                ];
        }
    });

    @Attr({
        updater(clickable: MasterClickable, value: string, oldValue: string) {
            if (value === 'submit') {
                clickable.on('click', () => {
                    const form = clickable.closest('form');
                    if (form) {
                        if (!form.checkValidity()) return;
                        if (form.requestSubmit) {
                            form.requestSubmit(this);
                        } else {
                            form.submit();
                        }
                    }
                }, { id: clickable, passive: true });
            } else if (
                value !== 'submit'
                || oldValue === 'submit'
            ) {
                clickable.off({ id: clickable });
            }
        }
    })
    type: string;

    @Attr()
    rel: string;

    @Attr()
    href: string;

    @Attr()
    disabled: boolean;

    @Attr()
    download: number;

    @Attr()
    target: string;

    render() {
        this.template.render(this.shadowRoot);
    }
}
