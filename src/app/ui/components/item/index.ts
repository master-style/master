import { Element } from '@element';
import MasterClickable from '@ui/shared/clickable';
import css from './index.scss';

const NAME = 'item';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterItem extends MasterClickable {

    readonly elementName = NAME;

    slotTemplate = [
        'slot', { name: 'head' },
        'div', { part: 'lower' }, [
            'slot', { part: 'body' },
            'slot', { name: 'foot' },
            'slot', { name: 'img' }
        ]
    ];
}
