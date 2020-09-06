import { Element, Attr } from '@element';
import { MasterClickable } from '@ui/components/clickable';
import css from './index.scss';

const NAME = 'card';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterCard extends MasterClickable { }
