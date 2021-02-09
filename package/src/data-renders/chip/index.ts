import { Element } from '@master/element';
import { ClickableElement } from '../../shared/clickable';
import css from './chip.scss';

const NAME = 'chip';


@Element('m-' + NAME)
export class ChipElement extends ClickableElement {
    static css = css;
}
