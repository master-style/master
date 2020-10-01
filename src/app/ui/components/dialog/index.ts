import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

const NAME = 'dialog';

@Element({
    tag: 'm-' + NAME,
    css
})
export class DialogElement extends ModalElement {

    contentTemplate = () => [
        'div', {
            $if: this.icon,
            part: 'head'
        }, [
            'm-icon', {
                $if: this.icon,
                name: this.icon, part: 'icon'
            }
        ],
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
    icon: string = '<i class="i-package">';

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';
}
