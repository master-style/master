export * from './attr';

import parseAttrValue from '@utils/parse-attr-value';

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
            const attrOption = attrOptions[attrKey];
            value = parseAttrValue(value);
            oldValue = parseAttrValue(oldValue);
            // console.log('changed:', attrKey, value, oldValue);
            attrOption.setProp.call(this, value, true);
            if (attributeChangedCallback) attributeChangedCallback.call(this, attrKey, value, oldValue);
            if (onAttrChanged) onAttrChanged.call(this, attrKey, value, oldValue);
        };

        prototype.connectedCallback = function () {
            this.ready = false;
            if (attrOptions) {
                const attributes = this.attributes;
                // tslint:disable-next-line: forin
                for (const eachAttrKey in attrOptions) {
                    const eachAttrOption: AttrOption = attrOptions[eachAttrKey];
                    const eachPropValue = this['_' + eachAttrOption.propKey];
                    const eachAttrValue = parseAttrValue(attributes[eachAttrKey]?.value);
                    if (eachAttrOption.reflect && eachPropValue !== eachAttrValue) {
                        this.attr(eachAttrKey, eachPropValue);
                    }
                }
            }
            this.ready = true;
            if (this.render) this.render();
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
