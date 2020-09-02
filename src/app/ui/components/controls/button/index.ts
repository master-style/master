import { Element, Attr, attachShadow } from '@element';

import css from './index.scss';

@Element('m-button')
export class MasterButtonElement extends HTMLElement {

    // element
    shadow = $('button', {},
        $('slot', {})
    );

    // attribute
    @Attr({ toggle: true, shadow: true }) disabled = false;
    @Attr({ toggle: true }) loading = true;
    @Attr() duration = 50;

    constructor() {
        super();
        attachShadow(this, css)
            .appendChild(this.shadow);
    }

    protected static disabled(element, value, oldValue) {
        // console.log(value, oldValue);
    }

    protected static loading(element, value, oldValue) {
        // console.log(value, oldValue);
    }

    onAttrChanged() {

    }

}
