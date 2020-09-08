import { Element, Attr } from '@element';
import { MasterClickable } from '@ui/components/clickable';
import css from './index.scss';

const NAME = 'item';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterItem extends MasterClickable {
    @Attr({ render: true })
    type: string = 'button';
}