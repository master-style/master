import { Element, Attr } from '@master/element';
import css from './input.scss';
import { Template } from '@master/template';
import { ControlElement } from '../../shared/control';

const NAME = 'input';


@Element('m-' + NAME)
export class InputElement extends ControlElement {

    static css = css;

    lightTemplate = new Template(() => [
        'input', {
            role: 'assignee',
            tabindex: -1,
            type: this.type,
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            multiple: this.multiple,
            accept: this.accept,
            readonly: this.readOnly && !this.keepValidity,
            pattern: this.pattern,
            autocomplete: this.autocomplete,
            autofocus: this.autofocus,
            $created: (element: HTMLInputElement) => {
                this.assignee = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = new Template(() => [
        'slot',
        'div', {
            $if: this.type === 'file',
            part: 'body',
            placeholder: this.placeholder,
            label: this.label?.length > this.placeholder?.length
                ? this.label
                : this.placeholder, // for default select width
        }, () => this.files.map((eachFile: File) => {
            const eachFileNameSplits = eachFile.name.split('.');
            const ext = eachFileNameSplits.pop();
            const src = URL.createObjectURL(eachFile);
            return [
                'div', {
                    part: 'output'
                }, [
                    'img', {
                        $if: this.interface === 'image',
                        part: 'image',
                        src,
                        $removed: () => URL.revokeObjectURL(src)
                    },
                    'm-chip', {
                        class: 'sm filled theme+'
                    }, [
                        'div', {
                            part: 'head',
                            $text: ext
                        },
                        'span', {
                            part: 'filename',
                            $text: eachFileNameSplits.join()
                        },
                        'div', {
                            part: 'foot',
                            $text: (eachFile.size / 1024).toFixed(0) + 'KB'
                        },
                        'm-button', {
                            $if: !this.readOnly && !this.disabled,
                            part: 'close',
                            class: 'square',
                            $on: {
                                click: (event) => {
                                    event.stopPropagation();
                                    this.value.splice(this.value.indexOf(eachFile), 1);
                                    this.render();
                                }
                            }
                        }, [
                            'm-icon', { name: 'cross' }
                        ]
                    ]
                ]
            ];
        })
        ,
        'fieldset', [
            'legend', [
                'span', { part: 'label', $text: this.label }
            ]
        ],
        'label', { $text: this.label },
        'div', {
            $if: this.busy
                || this.clearable && !this.readOnly && !this.disabled && !this.empty,
            part: 'foot'
        }, [
            'm-icon', {
                $if: this.busy,
                name: 'spinner',
                part: 'spinner'
            },
            'm-button', {
                $if: this.clearable && !this.readOnly && !this.disabled && !this.empty,
                class: 'round',
                name: 'cross',
                part: 'clear',
                $on: {
                    click: () => {
                        this.value = null;
                    }
                }
            }, [
                'm-icon', {
                    name: 'cross'
                }
            ]
        ],
    ]);

    files: File[] = [];

    @Attr({ observe: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'textbox';

    @Attr()
    keepValidity: boolean;

    @Attr()
    readOnly: boolean;

    @Attr()
    interface: string;

    @Attr()
    accept: string;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr({ observe: false, render: false })
    dragging: boolean = false;

    @Attr({
        onUpdate(input: InputElement, value, oldValue) {
            if (value === 'file') {
                input
                    .on('click', (event) => {
                        input.assignee.focus();
                        input.assignee.click();
                    }, { id: [NAME] + '.file', passive: true })
                // 拖拉檔案 accept 格式檢查待解決
                // .on('dragenter', (event) => {
                //     event.preventDefault();
                //     event.stopPropagation();
                //     input.dragging = true;
                // }, { id: [NAME] + '.file' })
                // .on('dragover', (event) => {
                //     event.preventDefault();
                //     event.stopPropagation();
                // }, { id: [NAME] + '.file' })
                // .on('dragleave dragend', (event) => {
                //     event.preventDefault();
                //     input.dragging = false;
                // }, { id: [NAME] + '.file' })
                // .on('drop', (event: any) => {
                //     input.dragging = false;
                //     event.preventDefault();
                //     if (input.assignee.files.length) {
                //         input.addFiles(input.assignee.files);
                //         input.assignee.dispatchEvent(changeEvent);
                //     }
                // }, { id: [NAME] + '.file' });
            }
            if (oldValue === 'file') {
                input.off({ id: [NAME] + '.file' });
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
        onUpdate(input: InputElement, value: any) {
            if (input.type === 'file') {
                input.empty = !value?.length || !value;
                // make file input can upload again
                input.assignee.value = '';
                input.render();
            } else {
                input.empty = value === null || value === undefined || value === '';
                input.assignee.value = value ?? null;
                input.validate();
            }
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

    @Attr()
    clearable: boolean = false;

    private addFiles(fileList: FileList) {
        if (!fileList.length) return;
        const files = Array.from(fileList);
        this.value
            = this.files
            = this.multiple ? this.files.concat(files) : files;
    }

    focus() {
        console.log('focus');
        this.assignee.focus();
    }

    onConnected() {
        this.validate();

        this
            .on('click focusin', (event: any) => {
                if (event.target === this.assignee || this.keepValidity && this.readOnly) return;
                this.focus();
            }, { id: [NAME] });

        this.assignee
            .on('input', (event: any) => {
                if (this.type === 'file') {
                    this.addFiles(this.assignee.files);
                } else {
                    this.value = event.target.value;
                }
                if (!this.dirty) {
                    this.dirty = true;
                }
            }, { id: [NAME], passive: true })
            .on('focusout', () => {
                this.touched = true;
            }, { id: [NAME], passive: true, once: true });
    }

    onDisconnected() {
        this.off({ id: [NAME] });
    }

}
