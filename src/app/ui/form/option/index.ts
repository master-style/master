import { Element, MasterElement, Attr } from '@master/element';
import { SelectElement } from '../select';

import css from './option.scss';

const NAME = 'option';

const updateSelected = (option: OptionElement, selected: boolean) => {
    const select = (option.parentElement as SelectElement);

    if (select.updating) {
        return;
    };

    // updating 防止循環更新
    select.updating = true;

    if (!select.multiple && selected) {
        select.options.forEach((eachOption) => {
            if (option !== eachOption) {
                eachOption.selected = false;
            }
        });
    }

    select.composeValue();

    select.updating = false;
};

@Element({
    tag: 'm-' + NAME,
    css
})
export class OptionElement extends MasterElement {

    updating: boolean;

    @Attr()
    disabled: boolean;

    @Attr({
        update(option: OptionElement, value) {
            const select = (option.parentElement as SelectElement);
            if (option['ready'] && !select.updating) {
                updateSelected(option, value);
            }
        },
        reflect: false
    })
    selected: boolean;

    @Attr({
        update(option: OptionElement, value) {
            if (option['ready']) {
                const select = (option.parentElement as SelectElement);
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
        updateSelected(this, this.selected);
    }

    onDisconnected() { }

}
