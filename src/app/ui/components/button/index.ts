import { Element, Attr } from '@element';
import MasterClickable from '@ui/shared/clickable';
import css from './index.scss';

const NAME = 'button';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterButton extends MasterClickable {
    @Attr()
    type: string = 'button';

    @Attr({ render: false })
    loading: boolean;
}
