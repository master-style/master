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
        'slot', { name: 'head' },
        'div', { class: 'inner' }, [
            'slot', { class: 'body' },
            'slot', { name: 'foot' }
        ]
    ];
}
