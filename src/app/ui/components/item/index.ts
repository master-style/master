import { Element, ClickableElement } from '@element';
import css from './index.scss';

const NAME = 'item';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterItem extends ClickableElement {

    static readonly namespace: string = NAME;

    slotTemplate = [
        'slot', { name: 'head' },
        'div', { part: 'lower' }, [
            'slot', { part: 'body' },
            'slot', { name: 'foot' },
            'slot', { name: 'img' }
        ]
    ];
}
