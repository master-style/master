import { Element } from '@element';
import { MasterClickable } from '@ui/components/clickable';
import css from './index.scss';

const NAME = 'item';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterItem extends MasterClickable {
    slotTemplate = [
        'div', { part: 'root' }, [
            'slot', { name: 'head' },
            'div', { part: 'lower' }, [
                'slot', { part: 'body' },
                'slot', { name: 'foot' }
            ]
        ]
    ];
}
