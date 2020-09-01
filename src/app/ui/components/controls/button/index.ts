import { Element, Attr } from '@element';

@Element({
    tag: 'm-button'
})
export class MasterButtonElement extends HTMLElement {
    @Attr() fuck = false;

    constructor() {
        super();
        this.ready = true;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML =
            `
            <style>
                button {
                }
            </style>
            `
            + $('button', {},
                $('slot', {}),
            ).outerHTML;
    }

    connectedCallback() {
        console.log('connected');
    }

}
