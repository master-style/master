import { Element, Attr } from '@element';
import { MasterClickable } from '@ui/clickable';
import css from './index.scss';

const NAME = 'button';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterButton extends MasterClickable {
    @Attr({ render: true })
    type: string = 'button';

    @Attr()
    loading: boolean;
}
