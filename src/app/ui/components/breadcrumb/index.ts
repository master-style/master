import { Element } from '@element';
import MasterClickable from '../../clickable';
import css from './index.scss';

const NAME = 'breadcrumb';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterBreadcrumb extends MasterClickable {
    slotTemplate = [
        'slot', { name: 'head' },
        'slot', { part: 'body' }
    ];
}
