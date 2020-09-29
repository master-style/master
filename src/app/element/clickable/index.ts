import { Attr } from '../attr';

type elementToken = string | { [key: string]: any };

export class ClickableElement extends HTMLElement {

    slotTemplate: (elementToken | (() => elementToken[]))[];

    template = $(() => {
        const tag = ((this.href || this.type === 'anchor') && !this.disabled)
            ? 'a'
            : (this.type || this.disabled) ? 'button' : null;

        const spinnerTemplate = [
            'm-icon', {
                $if: this.busy,
                name: 'spinner',
                part: 'spinner'
            }
        ];

        console.log(this.busy);

        switch (tag) {
            case 'button':
                return [
                    tag, {
                        class: 'touch',
                        part: 'root',
                        disabled: this.disabled,
                        type: this.type
                    },
                    this.slotTemplate || ['slot'], spinnerTemplate
                ];
            case 'a':
                return [
                    tag, {
                        class: 'touch',
                        part: 'root',
                        href: this.href,
                        download: this.download,
                        rel: this.rel,
                        target: this.target
                    },
                    this.slotTemplate || ['slot'], spinnerTemplate
                ];
            default:
                return [
                    'div', { part: 'root' },
                    this.slotTemplate || ['slot'], spinnerTemplate
                ];
        }
    });

    @Attr({
        updater(clickable: ClickableElement, value: string, oldValue: string) {
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
    busy: boolean;

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
