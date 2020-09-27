import { Element, Attr } from '@element';
import { SelectElement } from '../select';

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
            const select = (option.parentElement as SelectElement);
            if (!select.multiple && option.selected) {
                select.options.forEach((eachOption) => {
                    if (option !== eachOption)
                        eachOption.selected = false;
                });
            }
            select.composeValue();
        },
        reflect: false
    })
    selected: boolean = false;

    @Attr({
        updater(option: OptionElement, value) {
            const select = (option.parentElement as SelectElement);
            select.composeValue();
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
