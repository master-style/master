export * from './attr';

export function Element(tag: string) {
    return function (constructor: any) {
        const prototype = constructor.prototype;
        prototype.connectedCallback = function () {
            const propOptions = constructor.propOptions;
            if (propOptions) {
                // tslint:disable-next-line: forin
                for (const eachPropKey in propOptions) {
                    const eachOption = propOptions[eachPropKey];
                    const _eachPropKey = '_' + eachPropKey;
                    const value = this[_eachPropKey];
                    if (eachOption.reflect) {
                        this.attr(eachPropKey, value);
                        if (eachOption.shadow) this.shadow.attr(eachPropKey, value);
                    }
                }
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

