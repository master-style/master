import { Element, ClickableElement } from '@element';
import css from './index.scss';

const NAME = 'breadcrumb';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterBreadcrumb extends ClickableElement {

    readonly elementName = NAME;

    slotTemplate = [
        'slot', { name: 'head' },
        'slot', { part: 'body' }
    ];
}
