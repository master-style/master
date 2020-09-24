import { Element, Attr } from '@element';

import css from './index.scss';

const NAME = 'option';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterOption extends HTMLElement {

    @Attr()
    disabled: boolean;

    @Attr()
    selected: boolean;

    @Attr({
        updater(option: MasterOption) {
            option.parentElement['updateValue']();
        },
        reflect: false
    })
    value: any;

    onAdded() {
        this.parentElement['add'](this);
    }

    onRemoved() {
        this.parentElement['delete'](this);
    }
}
