import { Element, Attr, Prop, attrEnabled, MasterElement } from '@master/element';
import { ModalElement } from '../modal';
import './dialog-foot';
import css from './dialog.scss';
import { Template } from '@master/template';

const NAME = 'dialog';
const parserObject = (dialog: DialogElement, value, oldValue) => {
    if (oldValue) {
        return Object.assign({}, oldValue, value);
    } else {
        return value;
    }
};

enum TYPE_ICON {
    success = 'check',
    error = 'cross'
}


@Element('m-' + NAME)
export class DialogElement extends ModalElement {
    static css = css;

    lightTemplate = new Template(() => [
        'div', {
            $if: this.icon,
            slot: 'icon',
            $html: this.icon ? (this.iconOnBusy || this.icon) : this.icon
        },
        'form', {
            $created: (element: MasterElement) => this.closeElement = element,
        }, [
            'div', {
                $if: this.controls.length,
                class: 'y',
            }, this.controls,
            'm-dialog-foot', [
                'm-button', this.cancelButton,
                'm-button', this.rejectButton,
                'm-button', this.acceptButton
            ],
        ]
    ]);

    template = new Template(() => [
        'm-overlay', {
            part: 'overlay',
            $if: attrEnabled(this.overlay),
            $created: (element: MasterElement) => this.overlayElement = element
        },
        'div', {
            part: 'master',
            $created: (element) => this.master = element
                .on('submit', (event) => {
                    event.preventDefault();
                    this.accept();
                })
        }, [
            'm-icon', {
                class: 'animated',
                $if: this.type,
                part: 'icon',
                name: TYPE_ICON[this.type]
            },
            'slot', {
                $if: this.icon,
                name: 'icon'
            },
            'h2', {
                $if: this.title,
                part: 'title',
                $text: this.busy ? (this.titleOnBusy || this.title) : this.title
            },
            'p', {
                $if: this.text,
                part: 'text',
                $text: this.busy ? (this.textOnBusy || this.text) : this.text
            },
            'slot',
            'm-button', {
                part: 'close',
                class: 'round xs',
                $if: this.closeButton,
                $created: (element: MasterElement) => this.closeElement = element,
            }, [
                'm-icon', { name: this.closeButton, direction: 'left' }
            ]
        ]
    ]);

    _hidden: boolean = true;
    _duration: number = 300;
    _placement: string = 'center';

    form: HTMLFormElement;

    onAccept: () => Promise<boolean> | boolean;
    onReject: () => Promise<boolean> | boolean;
    onCancel: () => Promise<boolean> | boolean;

    @Prop()
    controls: any[] = [];

    @Attr({ observe: false, render: false })
    role = 'dialog';

    @Prop()
    title: string;

    @Prop()
    titleOnBusy: string;

    @Prop()
    text: string;

    @Prop()
    textOnBusy: string;

    @Prop({ parse: parserObject })
    acceptButton = {
        $if: true,
        $text: 'ok',
        type: 'submit',
        busy: false,
        disabled: false
    };

    @Prop({ parse: parserObject })
    rejectButton = {
        $if: false,
        $text: 'deny',
        $on: {
            click: () => this.reject()
        },
        busy: false,
        disabled: false
    };

    @Prop({ parse: parserObject })
    cancelButton = {
        $if: false,
        $text: 'cancel',
        $on: {
            click: () => this.cancel()
        },
        style: '--f-color: var(--f-fader)',
        busy: false,
        disabled: false
    };

    @Prop()
    type: string;

    @Prop()
    typeOnBusy: string;

    @Prop()
    icon: string;

    @Prop()
    iconOnBusy: string;

    @Prop()
    busy: boolean = false;

    lastAction: string;

    private get value() {
        const value = {};
        Array.from(
            this.master
                .querySelectorAll('m-input,m-select,m-textarea,m-check')
        )
            .map((eachControl: any) => {
                if (eachControl.name) {
                    value[eachControl.name] = eachControl.value;
                }
            });
        return value;
    }

    private async handleAction(action: string) {
        let whether = true;
        this.lastAction = action;
        const onAction = this['on' + action.charAt(0).toUpperCase() + action.slice(1)];
        if (onAction) {
            const result = onAction(this.value, this);
            if (result instanceof Promise) {
                const actionButton = this[action + 'Button'];
                this.busy = actionButton.busy = true;
                try {
                    whether = await result;
                } catch {
                    whether = false;
                }
                this.busy = actionButton.busy = false;
            } else {
                whether = result;
            }
        }
        if (whether) {
            this.close();
        }
        return whether;
    }

    async accept() {
        await this.handleAction('accept');
    }

    async reject() {
        await this.handleAction('reject');
    }

    async cancel() {
        await this.handleAction('cancel');
    }

    onClosed() {
        this.remove();
    }

}

const DIALOG_ELEMENT = document.createElement('m-dialog');

export function dialog(options: any) {
    const eachDialog = (DIALOG_ELEMENT.cloneNode() as DialogElement);
    for (const eachPropKey in options) {
        const eachPropValue = options[eachPropKey];
        eachDialog[eachPropKey] = eachPropValue;
    }
    document.body.appendChild(eachDialog);
    eachDialog.open();
    console.log(eachDialog.acceptButton);
    return eachDialog;
};
