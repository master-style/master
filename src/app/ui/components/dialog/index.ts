import { Element, Attr } from '@element';
import { ModalElement } from '../modal';
import css from './index.scss';

const NAME = 'dialog';

@Element({
    tag: 'm-' + NAME,
    css
})
export class DialogElement extends ModalElement {

    @Attr()
    placement: string = 'center';

    @Attr({ render: false, observe: false })
    role = 'dialog';
}
