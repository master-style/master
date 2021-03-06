import { Element } from '@master/element';
import { ClickableElement } from '../../shared/clickable';
import css from './item.scss';

const NAME = 'item';

@Element('m-' + NAME)
export class ItemElement extends ClickableElement {
    static css = css;

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
