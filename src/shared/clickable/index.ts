import { MasterElement, Attr } from '@master/element';
import { ControlElement } from '../control';

import { Template } from '@master/template';

type elementToken = string | { [key: string]: any };

const submitEvent = new window.Event('submit', { bubbles: true, cancelable: false });

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
                this.classList.add('touch');
                return [
                    tag, {
                        part: 'master',
                        disabled: this.disabled,
                        type: this.type
                    },
                    this.slotTemplate || ['slot'], spinnerTemplate
                ];
            case 'a':
                this.classList.add('touch');
                return [
                    tag, {
                        part: 'master',
                        href: this.href,
                        download: this.download,
                        rel: this.rel,
                        target: this.target
                    },
                    this.slotTemplate || ['slot'], spinnerTemplate
                ];
            default:
                this.classList.remove('touch');
                return [
                    'div', { part: 'master' },
                    this.slotTemplate || ['slot'], spinnerTemplate
                ];
        }
    });

    @Attr({
        onUpdate(clickable: ClickableElement, value: string, oldValue: string) {
            if (value === 'submit') {
                clickable.on('click', (event) => {
                    const form: HTMLFormElement = clickable.closest('form');
                    let valid = true;
                    let firstInvalidControl;
                    if (!form) {
                        return;
                    }
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
                    if (!valid) return;
                    form.dispatchEvent(submitEvent);
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
