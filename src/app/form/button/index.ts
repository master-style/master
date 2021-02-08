import { Element } from '@master/element';
import { ClickableElement } from '../../../shared/clickable';
import css from './button.scss';

const NAME = 'button';

@Element('m-' + NAME)
export class ButtonElement extends ClickableElement {

    static css = css;

    _type: string = 'button';
}
