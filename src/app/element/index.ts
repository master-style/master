
export * from './attr';

const DEFAULT_ELEMENT_OPTION = {
    shadow: true
};

const parseAttrValue = (value: any, type: string) => {
    if (value === 'undefined')
        return undefined;
    switch (type) {
        case 'Number':
            if (value === '') return null;
            return isNaN(+value) ? value : +value;
        case 'Boolean':
            return (value === '' || value) ? true : false;
        default:
            return value;
    }
};

export function Element(options: ElementOptions) {
    options = { ...DEFAULT_ELEMENT_OPTION, ...options };
    return function (constructor: any) {
        const prototype = constructor.prototype;
        const allAttrOptions = constructor.allAttrOptions;
        const onConnected = prototype.onConnected;
        const onDisconnected = prototype.onDisconnected;
        const onAttrChanged = prototype.onAttrChanged;
        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            if (value === oldValue) return;
            const eachAttrOptions = allAttrOptions[attrKey];
            const type = eachAttrOptions.type;
            value = parseAttrValue(value, type);
            oldValue = parseAttrValue(oldValue, type);
            eachAttrOptions.setProp.call(this, value, true);
            if (onAttrChanged) onAttrChanged.call(this, attrKey, value, oldValue);
        };
        prototype.connectedCallback = function () {
            this.ready = false; // prevent rendering many times
            if (allAttrOptions) {
                // 取得當前 attr 與 prop 比對，避免重複設置相同 attr
                const attributes = this.attributes;
                for (const eachAttrKey in allAttrOptions) {
                    const eachAttrOptions: AttrOptions = allAttrOptions[eachAttrKey];
                    const eachpropKey = eachAttrOptions.propKey;
                    const eachPropValue = this['_' + eachpropKey];
                    const eachAttr = attributes[eachAttrKey];
                    if (eachPropValue === undefined) continue;
                    let value: any;
                    let eachAttrValue: any;
                    if (eachAttr) {
                        eachAttrValue = parseAttrValue(eachAttr.value, eachAttrOptions.type);
                    }
                    if (eachAttrValue === eachPropValue) {
                        continue;
                    } else if (eachAttrValue !== undefined) {
                        value = eachAttrValue;
                    } else if (eachPropValue !== undefined) {
                        value = eachPropValue;
                    } else {
                        continue;
                    }
                    if (eachAttrOptions.reflect) {
                        if (eachAttrOptions.type === 'Boolean') {
                            this.toggleAttribute(eachAttrKey, value);
                        } else {
                            this.setAttribute(eachAttrKey, value);
                        }
                    }
                }
            }
            if (options.shadow && !this.shadowRoot) {
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
            if (allAttrOptions) {
                for (const eachAttrKey in constructor.allAttrOptions) {
                    const eachAttrOptions: AttrOptions = allAttrOptions[eachAttrKey];
                    const eachPropKey = eachAttrOptions.propKey;
                    const eachPropValue = this['_' + eachPropKey];
                    const eachUpdater = eachAttrOptions.updater;
                    if (eachUpdater) {
                        eachUpdater(this, eachPropValue);
                    }
                }
            }
            this.ready = true;
            if (onConnected) onConnected.call(this);
        };

        prototype.disconnectedCallback = function () {
            if (this.removeRender) this.removeRender();
            if (onDisconnected) onDisconnected.call(this);
        };

        window.customElements.define(options.tag, constructor);
    };
}
