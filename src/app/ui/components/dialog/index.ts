import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

const NAME = 'dialog';

const TYPE_ICON = {
    success: 'check',
    error: 'close'
};

@Element({
    tag: 'm-' + NAME,
    css
})
export class DialogElement extends ModalElement {

    contentTemplate = () => [
        'm-icon', {
            $if: this.type,
            name: TYPE_ICON[this.type], part: 'icon'
        },
        'h2', { $text: this.title },
        'p', { $text: this.text },
        'div', { part: 'foot' }, [
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
    type: string = 'error';

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';
}
