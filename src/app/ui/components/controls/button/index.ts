import { Element, Attr } from '@element';
import css from './index.scss';
import { MasterClickable } from '@ui/components/clickable';

const NAME = 'button';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterButton extends MasterClickable {
    @Attr({ render: true })
    type: string = 'button';
}
