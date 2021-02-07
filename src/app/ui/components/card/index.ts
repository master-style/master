import { Element, ClickableElement } from '../../../element';
import css from './card.scss';

const NAME = 'card';

@Element('m-' + NAME)
export class CardElement extends ClickableElement {
    static css = css;
}
