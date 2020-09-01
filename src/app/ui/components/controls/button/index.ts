import { Element, Attr, attachShadow } from '@element';

import css from './index.scss';

@Element('m-button')
export class MasterButton extends HTMLElement {

    @Attr() disabled = false;
    @Attr() loading = false;


    constructor() {
        super();
        attachShadow(this, css)
            .appendChild(
                $('button', {},
                    $('slot', {})
                )
            );
    }

    protected static disabled(element, value, oldValue) {
        console.log(value, oldValue);
        console.log(element);
    }

}
