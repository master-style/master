import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

const NAME = 'button';
const SLOT = 'slot';

@Element('m-' + NAME)
export class MasterButtonElement extends HTMLElement {

    shadow = $(NAME, { part: 'shadow' },
        $(SLOT, {}),
    );

    // href first
    @Attr({ shadow: true })
    href: string;

    @Attr({ toggle: true, shadow: true })
    disabled: boolean;

    @Attr({ toggle: true })
    loading: boolean;

    @Attr({ shadow: true })
    download: string = 'fuck';

    constructor() {
        super();
        attachShadow(this, css)
            .appendChild(this.shadow);
    }

    onConnected() { }

    attributeChangedCallback(attrKey, value, oldValue) {
        if (attrKey === 'href' && value && this.shadow.tagName !== 'A') {
            const attrOptions = MasterButtonElement['attrOptions'];
            this.shadow.remove();
            this.shadow = $('A', {
                part: 'shadow',
                ...Object.keys(attrOptions)
                    .reduce((attrs, eachAttrKey) => {
                        const eachAttrOption = attrOptions[eachAttrKey];
                        if (eachAttrOption.shadow)
                            attrs[eachAttrKey] = this[eachAttrOption.propKey];
                        return attrs;
                    }, {})
            },
                $(SLOT, {})
            );
            this.shadowRoot.appendChild(this.shadow);
        }
    }

    // protected static loading = function (value: boolean, oldValue: boolean) { };

}
