import { Element, Attr, Prop } from '@master/element';
import { ModalElement } from '../modal';
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
        'article', {
            $if: this.body,
            slot: 'body',
            class: 'prose',
            $html: this.body ? (this.bodyOnBusy || this.body) : this.body
        }
    ]);

    contentTokens = () => [
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
        'slot', {
            name: 'body',
            $if: this.body,
            $text: this.busy ? (this.bodyOnBusy || this.body) : this.body
        },
        'form', {
            part: 'form',
            $created: (element) => this.form = element
                .on('submit', (event) => {
                    console.log(event);
                    event.preventDefault();
                })
        }, [
            'div', {
                $if: this.controls.length,
                part: 'controls',
                class: 'y',
            }, this.controls,
            'div', {
                part: 'foot'
            }, [
                'm-button', this.cancelButton,
                'm-button', this.rejectButton,
                'm-button', this.acceptButton
            ]
        ],
    ]

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
        $on: {
            click: () => this.accept()
        },
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
        style: '--button-f-color: var(--f-fade)',
        busy: false,
        disabled: false
    };

    @Prop()
    body: string;

    @Prop()
    bodyOnBusy: string;

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

    private get data() {
        const value = {};
        let valid = true;
        Array.from(
            this.form
                .querySelectorAll('m-input,m-select,m-textarea,m-check')

        )
            .map((eachControl: any) => {
                if (eachControl.name) {
                    value[eachControl.name] = eachControl.value;
                    valid = valid && eachControl.valid;
                }
            });
        return {
            value,
            valid
        };
    }

    private async handleAction(action: string) {
        let whether = true;
        this.lastAction = action;
        const onAction = this['on' + action.charAt(0).toUpperCase() + action.slice(1)];
        if (onAction) {
            const result = onAction(this.data, this);
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

if (!(window as any).MasterUI) {
    (window as any).MasterUI = {};
}

(window as any).MasterUI.dialog = (options) => {
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
