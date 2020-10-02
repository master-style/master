import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';
import { extend } from '@utils/extend';

const NAME = 'dialog';

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
            slot: 'icon',
            $if: this.icon,
            $html: this.icon
        },
        'article', {
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
                $if: !this.buttons.cancel.hidden,
                $text: this.buttons.cancel.text
            },
            'm-button', {
                $if: !this.buttons.reject.hidden,
                $text: this.buttons.reject.text
            },
            'm-button', {
                $if: !this.buttons.accept.hidden,
                $text: this.buttons.accept.text
            }
        ]
    ]

    duration: number = 300;

    placement: string = 'center';

    role = 'dialog';

    title: string;

    text: string;

    confirmText: string;

    cancelText: string;

    body: string;

    type: string;

    icon: string;

    @Attr({
        parse(dialog: DialogElement, value, oldValue) {
            console.time('t1');
            extend({}, oldValue, value)
            console.timeEnd('t1');
            return extend({}, oldValue, value);
        },
        reflect: false,
        observe: false
    })
    buttons = {
        accept: {
            hidden: false,
            text: 'submit'
        },
        reject: {
            hidden: true,
            text: 'deny'
        },
        cancel: {
            hidden: true,
            text: 'cancel'
        }
    };

    accept() {

    }

    reject() {

    }

    onConfirm: () => Promise<any> | boolean;
    onReject: () => Promise<any> | boolean;
    onCancel: () => Promise<any> | boolean;

}

const DIALOG_ELEMENT = document.createElement('m-dialog');

$.dialog = (options) => {
    const _dialog = (DIALOG_ELEMENT.cloneNode() as DialogElement);
    for (const eachPropKey in options) {
        const eachPropValue = options[eachPropKey];
        _dialog[eachPropKey] = eachPropValue;
        console.log(_dialog[eachPropKey]);
    }
    document.body.appendChild(_dialog);
    return _dialog;
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
    onAccept() {

    },
    onReject() {

    },
    async onCancel() {
        return await true;
    }
});
