import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

@Element('m-button')
export class MasterButtonElement extends HTMLElement {

    shadow = $('button', {},
        $('slot', { name: 'button-head' }),
        $('slot', { part: 'button-body' }),
        $('slot', { name: 'button-foot' })
    );

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
