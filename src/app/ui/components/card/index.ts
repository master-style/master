import { Element, ClickableElement } from '@element';
import css from './index.scss';

const NAME = 'card';

@Element({
    tag: 'm-' + NAME,
    css
})
export class CardElement extends ClickableElement {}
