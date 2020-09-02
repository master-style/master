import { Element, Attr, attachShadow } from '@element';

import css from './index.scss';

@Element('m-button')
export class MasterButtonElement extends HTMLElement {

    // element
    shadow = $('button', {},
        $('slot', {})
    );

    // attribute
    @Attr({ toggle: true, shadow: true }) disabled: boolean;
    @Attr({ toggle: true }) loading: boolean;

    constructor() {
        super();
        attachShadow(this, css)
            .appendChild(this.shadow);
    }

    protected static loading = function (value: boolean, oldValue: boolean) {

    };

}
