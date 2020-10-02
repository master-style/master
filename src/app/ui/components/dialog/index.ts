import { Element, Attr, Prop } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

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

@Element({
    tag: 'm-' + NAME,
    css
})
export class DialogElement extends ModalElement {

    template = $(() => [
        'div', {
            $if: this.icon,
            slot: 'icon',
            $html: this.icon
        },
        'article', {
            $if: this.body,
            slot: 'body',
            class: 'prose',
            $html: this.body
        }
    ]);

    slotTokens = () => [
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
            $text: this.title
        },
        'p', {
            $if: this.text,
            part: 'text',
            $text: this.text
        },
        'slot', {
            name: 'body',
            $if: this.body
        },
        'div', {
            part: 'foot'
        }, [
            'm-button', {
                $if: !this.cancelButton.hidden,
                $text: this.cancelButton.text,
                $on: {
                    click: () => this.cancel()
                },
                busy: this.cancelButton.busy,
                disabled: this.cancelButton.disabled
            },
            'm-button', {
                $if: !this.rejectButton.hidden,
                $text: this.rejectButton.text,
                $on: {
                    click: () => this.reject()
                },
                busy: this.rejectButton.busy,
                disabled: this.rejectButton.disabled
            },
            'm-button', {
                $if: !this.acceptButton.hidden,
                $text: this.acceptButton.text,
                $on: {
                    click: () => this.accept()
                },
                busy: this.acceptButton.busy,
                disabled: this.acceptButton.disabled
            }
        ]
    ]

    _hidden: boolean = true;
    _duration: number = 300;
    _placement: string = 'center';

    onAccept: () => Promise<boolean> | boolean;
    onReject: () => Promise<boolean> | boolean;
    onCancel: () => Promise<boolean> | boolean;

    @Attr({ observe: false, render: false })
    role = 'dialog';

    @Prop()
    title: string;

    @Prop()
    text: string;

    @Prop({ parse: parserObject })
    acceptButton = {
        hidden: false,
        text: 'ok',
        busy: false,
        disabled: false
    };

    @Prop({ parse: parserObject })
    rejectButton = {
        hidden: true,
        text: 'deny',
        busy: false,
        disabled: false
    };

    @Prop({ parse: parserObject })
    cancelButton = {
        hidden: true,
        text: 'cancel',
        busy: false,
        disabled: false
    };

    body: string;
    type: string;
    icon: string;

    @Prop()
    busy: boolean = false;

    lastAction: string;

    private async handleCallback(action: string) {
        let whether = true;
        this.lastAction = action;
        const onAction = this['on' + action.charAt(0).toUpperCase() + action.slice(1)];
        if (onAction) {
            const result = onAction();
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
        await this.handleCallback('accept');
    }

    async reject() {
        await this.handleCallback('reject');
    }

    async cancel() {
        await this.handleCallback('cancel');
    }

    onClosed() {
        this.remove();
    }

}

const DIALOG_ELEMENT = document.createElement('m-dialog');

$.dialog = (options) => {
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
