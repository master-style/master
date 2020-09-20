import { Element } from '@element';
import MasterClickable from '@ui/shared/clickable';
import css from './index.scss';

const NAME = 'chip';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterCard extends MasterClickable { }
