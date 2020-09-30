import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

const NAME = 'dialog';

@Element({
    tag: 'm-' + NAME,
    css
})
export class DialogElement extends ModalElement {

    rootTemplate = () => [
        'm-icon', { name: 'check', part: 'icon' },
        'h2', { $text: this.title },
        'p', { $text: this.text }
    ]

    @Attr({ reflect: false, observe: false })
    title: string = 'Created';

    @Attr({ reflect: false, observe: false })
    text: string = 'The user has been created by Aron.';

    @Attr({ reflect: false, observe: false })
    type: string = 'success';

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';
}
