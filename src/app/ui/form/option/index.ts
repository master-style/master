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
        update(option: OptionElement) {
            const select = (option.parentElement as SelectElement);
            if (!select.multiple && option.selected) {
                select.options.get().forEach((eachOption) => {
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
        this.select.options.add(this);
    }

    onDisconnected() {
        this.select.options.remove(this);
    }
}
