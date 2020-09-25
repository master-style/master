import { Element, Attr } from '@element';

import css from './index.scss';

const NAME = 'option';

@Element({
    tag: 'm-' + NAME,
    css
})
export class OptionElement extends HTMLElement {

    @Attr()
    disabled: boolean;

    @Attr({
        updater(option: OptionElement, value) {
            if (value)
                option.parentElement['selectOption'](option);
        },
        reflect: false
    })
    selected: boolean = false;

    @Attr({
        updater(option: OptionElement) {
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
