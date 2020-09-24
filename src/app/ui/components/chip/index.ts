import { Element, ClickableElement } from '@element';
import css from './index.scss';

const NAME = 'chip';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterChip extends ClickableElement {
    readonly elementName = NAME;
}
