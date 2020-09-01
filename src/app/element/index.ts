import kebabToCamelCase from '@utils/kebab-to-camel-case';

export * from './attr';

export function Element(tag: string) {
    return function (constructor: any) {
        const prototype = constructor.prototype;
        const attrOptions = constructor.attrOptions;
        prototype.connectedCallback = function () {
            if (attrOptions) {
                // tslint:disable-next-line: forin
                for (const eachAttrKey in attrOptions) {
                    const eachAttrOption = attrOptions[eachAttrKey];
                    const _eachPropKey = '_' + eachAttrOption.propKey;
                    const value = this[_eachPropKey];
                    if (eachAttrOption.set) {
                        eachAttrOption.toggle
                            ? this.toggleAttribute(eachAttrKey, !!value)
                            : this.setAttribute(eachAttrKey, value);
                        if (eachAttrOption.shadow) {
                            eachAttrOption.toggle
                                ? this.shadow.toggleAttribute(eachAttrKey, !!value)
                                : this.shadow.setAttribute(eachAttrKey, value);
                        }
                    }
                }
            }
            const onConnected = prototype.onConnected;
            if (onConnected) onConnected.call(this);
        };
        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            console.log(attrKey, oldValue, value);
            console.log(attrOptions[attrKey]);
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

