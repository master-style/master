import { Element, Attr, Render, attachShadow } from '@element';

import buttonCss from './index.scss';

@Element({
    tag: 'm-button'
})
export class MasterButtonElement extends HTMLElement {

    static css = buttonCss;

    @Attr() fuck = false;
    ready = false;

    constructor() {
        super();
        this.ready = true;
        attachShadow.call(this);
        this.render();
    }

    @Render()
    render() {
        return `
            <button>
                <slot></slot>
            </button>
        `;
    }

    connectedCallback() {
        console.log('connected');
    }
}
