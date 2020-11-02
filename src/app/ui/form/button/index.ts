import { Element, ClickableElement } from '../../../element';
import css from './button.scss';

const NAME = 'button';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ButtonElement extends ClickableElement {

    _type: string = 'button';
}
