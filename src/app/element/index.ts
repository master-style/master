export * from './attr';

const DEFAULT_ELEMENT_OPTION = {
    shadow: true
};

const parseAttrValue = (value, type) => {
    switch (type) {
        case 'Number':
            return value = isNaN(+value) ? value : +value;
        case 'Boolean':
            return value = (value === '' || value) ? true : false;
        default:
            return value;
    }
};

export function Element(options: ElementOptions) {
    options = { ...DEFAULT_ELEMENT_OPTION, ...options };
    return function (constructor: any) {
        const prototype = constructor.prototype;
        const attrOptions = constructor.attrOptions;

        const onConnected = prototype.onConnected;
        const connectedCallback = prototype.connectedCallback;

        const onAttrChanged = prototype.onAttrChanged;
        const attributeChangedCallback = prototype.attributeChangedCallback;

        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            if (value === oldValue) return;
            const eachAttrOptions = attrOptions[attrKey];
            const type = attrOptions.type;
            value = parseAttrValue(value, type);
            oldValue = parseAttrValue(oldValue, type);
            // console.log('changed:', attrKey, value, oldValue);
            eachAttrOptions.setProp.call(this, value, true);
            if (attributeChangedCallback) attributeChangedCallback.call(this, attrKey, value, oldValue);
            if (onAttrChanged) onAttrChanged.call(this, attrKey, value, oldValue);
        };
        prototype.connectedCallback = function () {
            this.ready = false; // prevent rendering many times
            if (attrOptions) {
                const attributes = this.attributes;
                // tslint:disable-next-line: forin
                for (const eachAttrKey in attrOptions) {
                    const eachAttrOptions: AttrOptions = attrOptions[eachAttrKey];
                    const eachPropValue = this['_' + eachAttrOptions.propKey];
                    const eachAttr = attributes[eachAttrKey];
                    if (eachAttr) {
                        const eachAttrValue = parseAttrValue(eachAttr.value, eachAttrOptions.type);
                        if (eachAttrOptions.reflect && eachPropValue !== eachAttrValue) {
                            if (eachAttrOptions.type === 'Boolean') {
                                this.toggleAttribute(eachAttrKey, eachAttrValue);
                            } else {
                                this.setAttribute(eachAttrKey, eachAttrValue);
                            }
                            count++;
                        }
                    }
                }
            }
            this.ready = true;
            if (options.shadow) {
                const shadowRoot = this.attachShadow({ mode: 'open' });
                if (options.css && shadowRoot['adoptedStyleSheets']) {
                    const styleSheet = new CSSStyleSheet();
                    styleSheet['replaceSync'](options.css);
                    shadowRoot.adoptedStyleSheets = [styleSheet];
                } else if (options.css) {
                    const styleElement = document.createElement('style');
                    styleElement.innerHTML = options.css;
                    shadowRoot.appendChild(styleElement);
                }
            }
            if (this.render) this.render();
            if (connectedCallback) connectedCallback.call(this);
            if (onConnected) onConnected.call(this);
        };

        window.customElements.define(options.tag, constructor);
    };
}
