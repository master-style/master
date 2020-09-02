import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

const NAME = 'button';
const SLOT = 'slot';

@Element('m-' + NAME)
export class MasterButtonElement extends HTMLElement {

    shadow = $(NAME, {},
        $(SLOT, { name: NAME + '-head' }),
        $(SLOT, { part: NAME + '-body' }),
        $(SLOT, { name: NAME + '-foot' })
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
