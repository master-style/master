import MasterControl from '../control';

import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'input';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterInput extends MasterControl {

    onConnected() {
        this.appendChild(document.createElement('input'));
    }
}
