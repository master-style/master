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
    title: string = 'Created';

    @Attr({ reflect: false, observe: false })
    text: string = 'The user has been created by Aron.';

    @Attr({ reflect: false, observe: false })
    body: string = '<p>ts</p>';

    @Attr({ reflect: false, observe: false })
    type: string = 'success';

    @Attr({ reflect: false, observe: false })
    icon: string;

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';

}
