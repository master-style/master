import { Element, Attr } from '../../../element';
import { SelectElement } from '../select';

import css from './option.scss';

const NAME = 'option';

const updateSelected = (option: OptionElement, value) => {
    const select = (option.parentElement as SelectElement);

    if (!select.multiple && value) {
        select.options.forEach((eachOption) => {
            if (option !== eachOption)
                eachOption.selected = false;
        });
    }

    select.composeValue();
};

@Element({
    tag: 'm-' + NAME,
    css
})
export class OptionElement extends HTMLElement {

    @Attr()
    disabled: boolean;

    @Attr({
        update(option: OptionElement, value) {
            if (option['ready']) {
                updateSelected(option, value);
            }
        },
        reflect: false
    })
    selected: boolean;

    @Attr({
        update(option: OptionElement, value) {
            const select = (option.parentElement as SelectElement);
            select.composeValue();
            option.empty = value === null || value === undefined || value === '';
        },
        reflect: false
    })
    value: any;

    @Attr({ observe: false, render: false })
    empty: boolean = false;

    select: SelectElement;

    onConnected() {
        this.select = (this.parentElement as any);
        updateSelected(this, this.selected);
    }

    onDisconnected() { }

}
