import { Element, ClickableElement } from '@element';
import css from './index.scss';

const NAME = 'breadcrumb';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterBreadcrumb extends ClickableElement {

    static readonly namespace: string = NAME;

    slotTemplate = [
        'slot', { name: 'head' },
        'slot', { part: 'body' }
    ];
}
