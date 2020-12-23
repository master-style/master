import { Element, Attr } from '../../../element';
import { SelectElement } from '../select';

import css from './option.scss';

const NAME = 'option';

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
                const select = (option.parentElement as SelectElement);

                if (!select.multiple && value) {
                    select.options.forEach((eachOption) => {
                        if (option !== eachOption)
                            eachOption.selected = false;
                    });
                    select.selectedOptions.clear();
                }

                if (value) {
                    select.selectedOptions.add(option);
                } else {
                    select.selectedOptions.delete(option);
                }

                select.composeValue();
            }
        },
        reflect: false
    })
    selected: boolean;

    @Attr({
        update(option: OptionElement, value) {
            if (option['ready']) {
                const select = (option.parentElement as SelectElement);
                select.selectOptionByValue(select.value);
                select.composeValue();
            }
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
        this.select.options.add(this);
        this.select.selectOptionByValue(this.select.value);
        this.select.composeValue();
    }

    onDisconnected() {
        this.select.options.delete(this);
    }

}
