import { Element, Attr, Prop } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

const NAME = 'dialog';
const parserObject = (dialog: DialogElement, value, oldValue) => {
    if (oldValue) {
        return Object.assign(oldValue, value);
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
                busy: this.cancelButton.busy
            },
            'm-button', {
                $if: !this.rejectButton.hidden,
                $text: this.rejectButton.text,
                $on: {
                    click: () => this.reject()
                },
                busy: this.cancelButton.busy
            },
            'm-button', {
                $if: !this.acceptButton.hidden,
                $text: this.acceptButton.text,
                $on: {
                    click: () => this.accept()
                },
                busy: this.cancelButton.busy
            }
        ]
    ]

    _hidden: boolean = true;
    _duration: number = 300;
    _placement: string = 'center';

    onConfirm: () => Promise<any> | boolean;
    onReject: () => Promise<any> | boolean;
    onCancel: () => Promise<any> | boolean;

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
        busy: false
    };

    @Prop({ parse: parserObject })
    rejectButton = {
        hidden: true,
        text: 'deny',
        busy: false
    };

    @Prop({ parse: parserObject })
    cancelButton = {
        hidden: true,
        text: 'cancel',
        busy: false
    };

    body: string;
    type: string;
    icon: string;

    accept() {
        console.log('accept');
        this.close();
    }

    reject() {
        console.log('reject');
        this.close();
    }

    cancel() {
        console.log('cancel');
        this.close();
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
    return eachDialog;
};

$.dialog({
    title: 'Created',
    text: 'The user has been created by Aron.',
    type: 'success',
    acceptButton: {
        hidden: false,
        text: 'ok',
        busy: true
    },
    rejectButton: {
        hidden: false,
        text: 'deny',
        busy: true
    },
    cancelButton: {
        text: 'cancel'
    },
    onAccept() { },
    onReject() { },
    async onCancel() {
        return await true;
    }
});
