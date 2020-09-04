export * from './attr';

const parseAttrValue = (value) => {
    if (value === undefined) {
        return value;
    } else if (typeof value === 'boolean') {
        return value === true ? true : false;
    } else {
        if (value === '' || value === null) {
            return value;
        } else {
            return isNaN(+value) ? value : +value;
        }
    }
};

export function Element(tag: string) {
    return function (constructor: any) {
        const prototype = constructor.prototype;
        const attrOptions = constructor.attrOptions;

        const onConnected = prototype.onConnected;
        const connectedCallback = prototype.connectedCallback;

        const onAttrChanged = prototype.onAttrChanged;
        const attributeChangedCallback = prototype.attributeChangedCallback;
        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            if (value === oldValue) return;
            // console.log('changed:', attrKey, value, oldValue);
            const attrOption = attrOptions[attrKey];
            value = parseAttrValue(value);
            oldValue = parseAttrValue(oldValue);
            // console.log('changed:', attrKey, value, oldValue);
            attrOption.setProp.call(this, value, true);
            if (attributeChangedCallback) attributeChangedCallback.call(this, attrKey, value, oldValue);
            if (onAttrChanged) onAttrChanged.call(this, attrKey, value, oldValue);
        };

        prototype.connectedCallback = function () {
            if (attrOptions) {
                const attributes = this.attributes;
                // tslint:disable-next-line: forin
                for (const eachAttrKey in attrOptions) {
                    const eachAttrOption: AttrOption = attrOptions[eachAttrKey];
                    const eachPropValue = this['_' + eachAttrOption.propKey];
                    const eachAttrValue = parseAttrValue(attributes[eachAttrKey]?.value);
                    // console.log('connected:', eachAttrKey, eachPropValue);
                    if (eachAttrOption.reflect && eachPropValue !== eachAttrValue) {
                        eachAttrOption.set.call(this, eachPropValue);
                    }
                }
            }
            if (connectedCallback) connectedCallback.call(this);
            if (onConnected) onConnected.call(this);
        };

        window.customElements.define(tag, constructor);
    };
}

export function attachShadow(element, css) {
    const shadowRoot = element.attachShadow({ mode: 'open' });
    if (css && shadowRoot['adoptedStyleSheets']) {
        const styleSheet = new CSSStyleSheet();
        styleSheet['replaceSync'](css);
        shadowRoot.adoptedStyleSheets = [styleSheet];
    } else if (css) {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = css;
        shadowRoot.appendChild(styleElement);
    }
    return shadowRoot;
}
