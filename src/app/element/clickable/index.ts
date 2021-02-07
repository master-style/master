import { Attr } from '../attr';
import { ControlElement } from '../control';
import { Template } from '@master/template';
import { MasterElement } from '../core';

type elementToken = string | { [key: string]: any };

export class ClickableElement extends MasterElement {

    slotTemplate: (elementToken | (() => elementToken[]))[];

    template = new Template(() => {
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
        update(clickable: ClickableElement, value: string, oldValue: string) {
            if (value === 'submit') {
                clickable.on('click', (event) => {
                    const form = clickable.closest('form');
                    let valid = true;
                    let firstInvalidControl;
                    form.querySelectorAll('m-input,m-textarea,m-select,m-check')
                        .forEach((eachControl: ControlElement) => {
                            eachControl.dirty = true;
                            if (eachControl.invalid) {
                                if (!firstInvalidControl) {
                                    firstInvalidControl = eachControl;
                                }
                                valid = false;
                            }
                        });

                    if (firstInvalidControl) {
                        firstInvalidControl
                            .scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }

                    if (form) {
                        if (!valid) return;
                        if (form.requestSubmit) {
                            form.requestSubmit();
                        } else {
                            form.submit();
                        }
                    }
                }, { id: [clickable], passive: true });
            } else if (
                value !== 'submit'
                || oldValue === 'submit'
            ) {
                clickable.off({ id: [clickable] });
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
