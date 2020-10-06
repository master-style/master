import { Element, Attr, Prop, ControlElement } from '@element';
import css from './index.scss';

const NAME = 'input';

@Element({
    tag: 'm-' + NAME,
    css
})
export class InputElement extends ControlElement {

    controlTemplate = $(() => [
        'input', {
            part: 'body',
            type: this.type,
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            multiple: this.multiple,
            accept: this.accept,
            readonly: this.readOnly,
            pattern: this.pattern,
            autocomplete: this.autocomplete,
            autofocus: this.autofocus,
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = $(() => [
        'slot',
        'div', {
            $if: this.type === 'file',
            part: 'body',
            placeholder: this.placeholder,
            $text: this.files && this.files[0]?.name,
            label: this.label?.length > this.placeholder?.length
                ? this.label
                : this.placeholder, // for default select width
        },
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

    @Prop({
        update(input: InputElement, value) {
            console.log(value);
            if (input.type === 'file' && value?.length) {
                input.value = value[0].name;
            }
            // function readURL(input) {
            //     if (input.files && input.files[0]) {
            //         var reader = new FileReader();

            //         reader.onload = function (e) {
            //             $('#blah').attr('src', e.target.result);
            //         }

            //         reader.readAsDataURL(input.files[0]); // convert to base64 string
            //     }
            // }
        }
    })
    files: FileList;

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'textbox';

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    accept: string;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr({ observe: false, render: false })
    dragging: boolean = false;

    @Attr({
        update(input: InputElement, value, oldValue) {
            if (value === 'file') {
                input
                    .on('dragenter', () => {
                        input.dragging = true;
                    }, { id: NAME + '.file', passive: true })
                    .on('dragleave drop', () => {
                        input.dragging = false;
                    }, { id: NAME + '.file', passive: true })
            }
            if (oldValue === 'file') {
                input.off({ id: NAME + '.file' });
            }
        }
    })
    type: string;

    @Attr({ render: false })
    expanded: boolean;

    @Attr({
        parse(input: InputElement, value: any) {
            if (input.type === 'number') {
                if (value === '') {
                    value = null;
                } else {
                    value = isNaN(+value) ? 0 : +value;
                }
            }
            return value;
        },
        update(input: InputElement, value: any) {
            input.empty = value === null || value === undefined || value === '';
            if (input.type !== 'file') {
                input.body.value = value ?? null;
            }
            input.validate();
        },
        render: false,
        reflect: false
    })
    value: any;

    @Attr()
    multiple: boolean;

    @Attr()
    autocomplete: string;

    @Attr()
    max: number;

    @Attr()
    min: number;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    pattern: string;

    @Attr()
    size: number;

    @Attr()
    step: number;

    onAdded() {
        this.validate();

        this
            .on('click', (event: any) => {
                if (event.target === this.body) return;
                this.body.focus();
            }, {
                id: NAME,
                passive: true
            });

        this.body
            .on('input', (event: any) => {
                if (this.type === 'file' && this.body.files.length) {
                    this.files = this.body.files;
                } else {
                    this.value = event.target.value;
                }
                if (!this.dirty) {
                    this.dirty = true;
                }
            }, { id: NAME, passive: true })
            .on('focusout', () => {
                this.touched = true;
            }, { id: NAME, passive: true, once: true });
    }

    onRemoved() {
        this.off({ id: NAME });
    }

}
