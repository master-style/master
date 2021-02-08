import { Element } from '@master/element';
import { ClickableElement } from '../../../shared/clickable';
import css from './card.scss';

const NAME = 'card';

@Element('m-' + NAME)
export class CardElement extends ClickableElement {
    static css = css;
}
