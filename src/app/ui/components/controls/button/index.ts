import { Element, Attr, attachShadow } from '@element';

import css from './index.scss';

@Element('m-button')
export class MasterButton extends HTMLElement {

    @Attr() disabled = true;
    @Attr() loading = false;

    buttonElement = $('button', {},
        $('slot', {})
    );

    constructor() {
        super();
        attachShadow(this, css)
            .appendChild(this.buttonElement);
    }

    protected static disabled(element, value, oldValue) {
        console.log(element.isConnected, value, oldValue);
    }

}
