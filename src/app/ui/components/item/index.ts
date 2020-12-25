import { Element, ClickableElement } from '../../../element';
import css from './item.scss';

const NAME = 'item';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ItemElement extends ClickableElement {

    slotTemplate = [
        'slot', { name: 'head' },
        'div', { part: 'lower' }, [
            'slot', { part: 'body' },
            'slot', { name: 'foot' },
            'slot', { name: 'img' }
        ]
    ];

    body: HTMLSlotElement;

}
