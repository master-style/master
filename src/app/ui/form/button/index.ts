import { Element, Attr, ClickableElement } from '../../../element';
import css from './index.scss';

const NAME = 'button';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ButtonElement extends ClickableElement {

    _type: string = 'button';
}
