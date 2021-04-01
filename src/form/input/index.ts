import { Element, Attr } from '@master/element';
import css from './input.scss';
import { Template } from '@master/template';
import { ControlElement } from '../../shared/control';

const NAME = 'input';
const changeEvent = new window.Event('change', { 'bubbles': true, 'cancelable': false });


@Element('m-' + NAME)
export class InputElement extends ControlElement {

    static css = css;

    controlTemplate = new Template(() => [
        'input', {
            part: 'body',
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
                this.body = element;
                this.validity = element.validity;
                this.focus = element.focus;
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
                        class: 'sm'
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

    #files = [];

    savedTabIndex: number;

    files: File[] = [];

    @Attr({ observe: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'textbox';

    @Attr()
    keepValidity: boolean;

    @Attr({
        onUpdate(input: InputElement, value) {
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
                        input.body.focus();
                        input.body.click();
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
                //     if (input.body.files.length) {
                //         input.addFiles(input.body.files);
                //         input.body.dispatchEvent(changeEvent);
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
                input.render();
            } else {
                input.empty = value === null || value === undefined || value === '';
                input.body.value = value ?? null;
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

    onConnected() {
        this.validate();

        this
            .on('click', (event: any) => {
                if (event.target === this.body || this.keepValidity && this.readOnly) return;
                this.body.focus();
            }, {
                id: [NAME],
                passive: true
            });

        this.body
            .on('input', (event: any) => {
                if (this.type === 'file') {
                    this.addFiles(this.body.files);
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
