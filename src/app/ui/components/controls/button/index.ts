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

    connectedCallback() {}

    attributeChangedCallback() {
        console.log('fuck');
    }

}
