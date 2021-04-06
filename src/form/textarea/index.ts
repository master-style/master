import { Element, Attr } from '@master/element';
import { Template } from '@master/template';
import { ControlElement } from '../../shared/control';

import css from './textarea.scss';

const NAME = 'textarea';

@Element('m-' + NAME)
export class TextareaElement extends ControlElement {
    static css = css;

    lightTemplate = new Template(() => [
        'textarea', {
            role: 'assignee',
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly,
            rows: this.rows,
            $created: (element: HTMLInputElement) => {
                this.assignee = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = new Template(() => [
        'slot',
        'fieldset', [
            'legend', [
                'span', { part: 'label', $text: this.label }
            ]
        ],
        'label', { $text: this.label },
        'm-icon', {
            $if: this.busy,
            name: 'spinner',
            part: 'spinner'
        }
    ]);

    savedTabIndex: number;

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'textbox';

    @Attr()
    keepValidity: boolean;

    @Attr({
        onUpdate(input: TextareaElement, value) {
            const tabIndex = input.tabIndex;

            if (value) {
                input.savedTabIndex = tabIndex;
                input.tabIndex = -1;
            }
            if (!value && input.savedTabIndex !== undefined) {
                input.tabIndex = input.savedTabIndex;
                input.savedTabIndex = undefined;
            }
        }
    })
    readOnly: boolean;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr()
    type: string;

    @Attr({ render: false })
    expanded: boolean;

    @Attr({
        reflect: false,
        render: false,
        onUpdate(textarea: TextareaElement, value: any) {
            textarea.empty = value === null || value === undefined || value === '';
            textarea.assignee.value = value ?? null;
            textarea.validate();
        },
    })
    value: any;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    rows: number = 1;

    onConnected() {
        this.validate();

        this
            .on('click', (event: any) => {
                if (event.target === this.assignee) return;
                this.assignee.focus();
            }, {
                id: [NAME],
                passive: true
            });

        this.assignee.on('input', (event: any) => {
            this.value = event.target.value;
            if (!this.dirty) {
                this.dirty = true;
            }
        }, { id: [NAME], passive: true })
            .on('focusout', () => {
                this.touched = true;
            }, { id: [NAME], passive: true, once: true });
    }
}
