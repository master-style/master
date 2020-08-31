import { Element, Attr } from '@element';

@Element({
    tag: 'm-button'
})
export class MasterButtonElement extends HTMLElement {

    @Attr() fuck = false;

    connectedCallback() {
    }

}
