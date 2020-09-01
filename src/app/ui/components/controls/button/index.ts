import { Element, Attr, attachShadow } from '@element';

import css from './index.scss';

@Element('m-button')
export class MasterButton extends HTMLElement {

    // element
    shadow = $('button', {},
        $('slot', {})
    );

    // attribute
    @Attr({ shadow: true }) disabled = true;
    @Attr() loading = true;

    constructor() {
        super();
        attachShadow(this, css)
            .appendChild(this.shadow);
    }

    // protected static disabled(element, value, oldValue) {
    //     console.log(value, oldValue);
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     console.log(name, oldValue, newValue);
    // }

}
