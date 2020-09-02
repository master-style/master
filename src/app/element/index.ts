export * from './attr';

import parseStr from '@utils/parse-str';

export function Element(tag: string) {
    return function (constructor: any) {
        const prototype = constructor.prototype;
        const attrOptions = constructor.attrOptions;
        const onConnected = prototype.onConnected;
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
            if (onConnected) onConnected.call(this);
        };
        const onAttrChanged = prototype.onAttrChanged;
        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            const attrOption = attrOptions[attrKey];
            if (attrOption.toggle) {
                oldValue = oldValue === null ? false : true;
                value = value === null ? false : true;
            } else {
                oldValue = parseStr(oldValue);
                value = parseStr(value);
            }
            console.log(attrKey, oldValue, 'to', value);
            attrOption.setProp(value, true);
            if (onAttrChanged) onAttrChanged.call(this);
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

