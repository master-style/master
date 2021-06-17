import { Element, Attr, Event, EventEmitter } from '@master/element';
import css from './input.scss';
import { Template } from '@master/template';
import { ControlElement } from '../../shared/control';
import { $ } from '@master/dom';
import { displaySizeByBytes } from '../../utils/display-size-by-bytes';
const changeEvent = new window.Event('change', { bubbles: true, cancelable: false });
const inputEvent = new window.Event('input', { bubbles: true, cancelable: false });

const NAME = 'input';

@Element('m-' + NAME)
export class InputElement extends ControlElement {

    static css = css;

    private static parseValue(input: InputElement, value) {
        if (input.type === 'number') {
            if (value === '') {
                value = null;
            } else {
                value = isNaN(+value) ? 0 : +value;
            }
        }
        return value;
    }

    private static updateValue(input: InputElement, value: any, oldValue: any, preventAssign?: boolean) {
        if (input.type === 'file') {
            input.empty = !value?.length || !value;
            if (!preventAssign) {
                input.assignee.value = input.empty ? null : value;
            }
            if (input.validateFiles()) {
                input.validate();
            }
        } else {
            input.empty = value === null || value === undefined || value === '';
            // fix: composition text issue
            if (!preventAssign) {
                input.assignee.value = value ?? null;
            }
            input.validate();
        }
    }

    lightTemplate = new Template(() => [
        'input', {
            role: 'assignee',
            type: this.type === 'file' ? false : this.type,
            name: this.name,
            placeholder: this.placeholder,
            disabled: this.disabled,
            required: this.required,
            readonly: this.readOnly && !this.keepValidity,
            pattern: this.pattern,
            max: this.max,
            min: this.min,
            maxlength: this.maxlength,
            minlength: this.minlength,
            size: this.size,
            step: this.step,
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
        // for file
        'input', {
            $if: this.type === 'file',
            role: 'file-input',
            tabindex: -1,
            type: this.type,
            name: this.name,
            disabled: this.disabled,
            required: this.required,
            multiple: this.multiple,
            accept: this.accept,
            $created: (element: HTMLInputElement) => {
                this.fileInput = $(element)
                    .on('change', (event: any) => {
                        event.stopPropagation();
                        this.addFiles(this.fileInput.files);
                        // make file input can upload again
                        this.fileInput.value = '';
                        if (!this.dirty) {
                            this.dirty = true;
                        }
                    }, { id: [NAME], passive: true })
                    .on('focusout', () => {
                        this.touched = true;
                    }, { id: [NAME], passive: true, once: true });
            }
        },
        'div', {
            $if: this.type === 'file',
            part: 'body'
        }, [
            // just for placeholder display
            'div', {
                $if: !this.value?.length,
                'aria-placeholder': this.placeholder
            },
            'slot', {
                name: 'placeholder',
                $if: !this.value?.length
            },
            'div', {
                part: 'output',
                $if: this.value?.length
            },
            () => this.value?.map((eachFile: File) => {
                const ext = eachFile.name.split('.').pop();
                const src = URL.createObjectURL(eachFile);
                const type = eachFile.type.split('/')[0];
                return [
                    'div', {
                        part: 'output-item',
                        $id: eachFile
                    }, [
                        'img', {
                            $if: type === 'image',
                            part: 'preview',
                            src,
                            $removed: () => URL.revokeObjectURL(src)
                        },
                        'div', {
                            $if: type !== 'image',
                            part: 'preview',
                            $text: ext
                        },
                        'm-chip', {
                            class: 'sm filled' + (this.unacceptableFiles.has(eachFile) ? ' red+' : ' theme+')
                        }, [
                            'span', {
                                part: 'output-item-name',
                                $text: eachFile.name
                            },
                            'div', {
                                part: 'foot',
                                $text: displaySizeByBytes(eachFile.size)
                            },
                            'm-button', {
                                $if: !this.readOnly && !this.disabled,
                                part: 'close',
                                class: 'square',
                                $on: {
                                    click: (event) => {
                                        event.stopPropagation();
                                        this.value = this.value.filter((file) => eachFile !== file);
                                        this.dispatchEvent(changeEvent);
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
        ],
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
        ]
    ]);

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

    @Attr({ onRender: (input: InputElement) => input.validate() })
    accept: string;

    @Attr()
    placeholder: string;

    @Attr()
    maxFileSize: number;

    @Attr()
    maxFileNumber: number;

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
                    .on('dragover', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                    }, { id: [NAME] + '.file' })
                    .on('dragenter', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log(event.type, event.target);
                        input.dragging = true;
                    }, { id: [NAME] + '.file' })
                    .on('dragleave dragend', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log(event.type, event.target);
                        input.dragging = false;
                    }, { id: [NAME] + '.file' })
                    .on('drop', (event: any) => {
                        input.dragging = false;
                        console.log(event);
                        event.preventDefault();
                        if (!input.touched) {
                            input.touched = true;
                        }
                        const files = Array.from(event.dataTransfer.files) as File[];
                        let acceptedFiles: File[];
                        // 檢查拖進的檔案符合 accept 格式
                        if (input.accept) {
                            const MIMEtype = new RegExp(input.accept.replace('*', '.\*'));
                            acceptedFiles = files
                                .filter((file: File) => MIMEtype.test(file.type));
                        } else {
                            acceptedFiles = files;
                        }
                        if (acceptedFiles.length) {
                            input.addFiles(acceptedFiles);
                        }
                    }, { id: [NAME] + '.file' });
            }
            if (oldValue === 'file') {
                input.off({ id: [NAME] + '.file' });
            }
        }
    })
    type: string;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    multiple: boolean;

    @Attr()
    autocomplete: string;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    max: number;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    min: number;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    maxlength: number;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    minlength: number;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    pattern: string;

    @Attr()
    size: number;

    @Attr({ onRender: (input: InputElement) => input.validate() })
    step: number;

    @Attr()
    clearable: boolean = false;

    @Attr()
    whenFileSizeExceeds: string;

    @Attr({ render: false })
    expanded: boolean;

    @Attr({
        parse: InputElement.parseValue,
        onUpdate: InputElement.updateValue,
        render: false,
        reflect: false
    })
    value: any | File[];

    fileInput: HTMLInputElement;
    unacceptableFiles: Set<File> = new Set();

    private addFiles(files: FileList | File[]) {
        if (!files.length) return;
        files = Array.isArray(files) ? files : Array.from(files);
        if (this.multiple) {
            const value = this.value || [];
            if (this.maxFileNumber) {
                this.value = value.concat(files.splice(0, this.maxFileNumber - value.length))
            } else {
                this.value = value.concat(files);
            }
        } else {
            this.value = [files[0]];
        }
        this.dispatchEvent(changeEvent);
        if (!this.dirty) {
            this.dirty = true;
        }
    }

    validateFiles(): boolean {

        if (!this.ready) {
            return;
        }

        let prompt: string;

        this.unacceptableFiles.clear();

        // 檢查 "檔案個數", "單檔大小"
        if (this.maxFileSize) {
            for (const file of this.value) {
                if (file.size > this.maxFileSize) {
                    prompt = (this.whenFileSizeExceeds || '') + ' ( ' + displaySizeByBytes(this.maxFileSize) + ' )';
                    this.unacceptableFiles.add(file);
                }
            }
        }

        if (this.unacceptableFiles.size) {
            this.assignee.setCustomValidity(prompt);
        } else {
            this.assignee.setCustomValidity('');
        }

        if (prompt) {
            this.prompt = prompt;
        } else {
            this.removeAttribute('prompt');
        }
        this.valid = !prompt;
        this.invalid = !!prompt;
        this.render();

        return this.valid;
    }

    focus() {
        if (this.type === 'file') {
            this.fileInput.focus();
        } else {
            this.assignee.focus();
        }
    }

    onConnected() {
        this.validate();

        this
            .on('click focusin', (event: any) => {
                if (event.target === this.assignee || this.keepValidity && this.readOnly) return;
                this.focus();
            }, { id: [NAME] });

        this.assignee
            .on('input', (event: InputEvent) => {
                // fix: don't set this.value to fix composition text issue
                const value = this['_value'] = InputElement.parseValue(this, (event.target as HTMLInputElement).value);
                InputElement.updateValue(this, value, this.value, true);
                if (!this.dirty) {
                    this.dirty = true;
                }
            }, { id: [NAME], passive: true })
            .on('focusout', () => {
                this.touched = true;
            }, { id: [NAME], passive: true });
    }

    onDisconnected() {
        this.off({ id: [NAME] });
        this.assignee.off({ id: [NAME] })
    }

}
