export * from './attr';

import kebabToCamelCase from '@utils/kebab-to-camel-case';

export function Element(tag: string) {
    return function (constructor: any) {
        const prototype = constructor.prototype;
        prototype.connectedCallback = function () {
            const reflectedAttributes = constructor.reflectedAttributes;
            if (reflectedAttributes) {
                reflectedAttributes.forEach((eachAttrKey: string) => {
                    const _eachPropKey = '_' + kebabToCamelCase(eachAttrKey);
                    const value = this[_eachPropKey];
                    typeof value === 'boolean'
                        ? this.toggleAttribute(eachAttrKey, value)
                        : this.setAttribute(eachAttrKey, value);
                });
            }
            const onConnected = prototype.onConnected;
            if (onConnected) onConnected.call(this);
        }
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