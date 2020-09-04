import { Element, Attr, attachShadow } from '@element';
import css from './index.scss';

const NAME = 'button';
const SLOT = 'slot';

@Element('m-' + NAME)
export class MasterButtonElement extends HTMLElement {

    shadow: Element;
    template = $(() => [
        this.href ? 'a' : 'button', { class: 'shine', $text: '1' }
    ]);

    // href first
    @Attr({ shadow: true })
    href: string;

    @Attr({ toggle: true, shadow: true })
    disabled: boolean;

    @Attr({ toggle: true })
    loading: boolean;

    @Attr({ shadow: true })
    download: string;

    constructor() {
        super();
        attachShadow(this, css);
    }

    onConnected() {
        // console.log(this);
        if (!this.shadow) MasterButtonElement.href.call(this, this.href);
    }

    attributeChangedCallback(attrKey, value, oldValue) { }

    protected static href = function (value: boolean) {
        const renewShadow = (tag) => {
            const attrOptions = MasterButtonElement['attrOptions'];
            if (this.shadow) this.shadow.remove();
            this.shadow = $(tag, {
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
        };

        if (typeof value === 'string' && this.shadow?.tagName !== 'A') {
            renewShadow('A');
        } else if (!this.shadow || this.shadow?.tagName === 'A') {
            renewShadow('BUTTON');
        }
    };

}
