import { Element, ClickableElement } from '../../../element';
import css from './chip.scss';

const NAME = 'chip';


@Element('m-' + NAME)
export class ChipElement extends ClickableElement {
    static css = css;
}
