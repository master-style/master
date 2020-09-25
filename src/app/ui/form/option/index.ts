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
        updater(option: OptionElement) {
            option.parentElement['updateSelected'](option);
        },
        reflect: false
    })
    selected: boolean = false;

    @Attr({
        updater(option: OptionElement, value) {
            option.parentElement['updateValue']();
            option.empty = value === null || value === undefined || value === '';
        },
        reflect: false
    })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean = false;

    onAdded() {
        this.parentElement['addOption'](this);
    }

    onRemoved() {
        this.parentElement['removeOption'](this);
    }
}
