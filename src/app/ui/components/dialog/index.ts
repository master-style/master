import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

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
                $text: 'CANCEL'
            },
            'm-button', {
                $text: 'OK'
            }
        ]
    ]

    @Attr()
    duration: number = 300;

    @Attr({ reflect: false, observe: false })
    title: string;

    @Attr({ reflect: false, observe: false })
    text: string;

    @Attr({ reflect: false, observe: false })
    body: string;

    @Attr({ reflect: false, observe: false })
    type: string;

    @Attr({ reflect: false, observe: false })
    icon: string;

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';

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

const dialog = $.dialog({
    title: 'Created',
    text: 'The user has been created by Aron.',
    type: 'success',
    buttons: {
        confirm: {
            $text: 'ok',
            $on: {
                click: () => {

                }
            }
        },
        cancel: {
            $text: 'cancel',
            $on: {
                click: () => {
                    dialog.close();
                }
            }
        }
    }
});
