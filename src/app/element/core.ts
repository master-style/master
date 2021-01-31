import camelToKebabCase from '../utils/camel-to-kebab-case';

const readyEvent = new CustomEvent('ready');

const DEFAULT_ELEMENT_OPTION = {
    shadow: true
};

export function Element(options: ElementOptions) {
    options = { ...DEFAULT_ELEMENT_OPTION, ...options };
    return function (constructor: any) {

        constructor['elementName'] = options.tag.replace('m-', '');
        const prototype = constructor.prototype;
        const attrsOptions = constructor.attrsOptions;
        const propsOptions = constructor.propsOptions;
        const onConnected = prototype.onConnected;
        const onDisconnected = prototype.onDisconnected;
        const onAttrChanged = prototype.onAttrChanged;

        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            if (value === oldValue) return;
            const eachAttrOptions = attrsOptions[attrKey];
            const type = eachAttrOptions.type;
            value = parseAttrValue(value, type);
            oldValue = parseAttrValue(oldValue, type);
            eachAttrOptions.set.call(this, value, true);
            if (onAttrChanged) onAttrChanged.call(this, attrKey, value, oldValue);
        };
        prototype.connectedCallback = function () {
            this.ready = false; // prevent rendering many times
            this.initial = false;
            if (propsOptions) {
                for (const eachPropKey in constructor.propsOptions) {
                    const eachPropOption: AttributeOptions = propsOptions[eachPropKey];
                    const eachPropValue = this['_' + eachPropKey];
                    const eachUpdate = eachPropOption.update;
                    if (eachUpdate) {
                        eachUpdate(this, eachPropValue);
                    }
                }
            }
            if (attrsOptions) {
                // 取得當前 attr 與 prop 比對，避免重複設置相同 attr
                const attributes = this.attributes;
                for (const eachAttrKey in attrsOptions) {
                    const eachAttrOptions: AttributeOptions = attrsOptions[eachAttrKey];
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
                // https://www.npmjs.com/package/construct-style-sheets-polyfill
                const shadowRoot = this.attachShadow({ mode: 'open' });
                if (options.css && shadowRoot.adoptedStyleSheets) {
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
            this.initial = true;
            if (attrsOptions) {
                for (const eachAttrKey in constructor.attrsOptions) {
                    const eachAttrOptions: AttributeOptions = attrsOptions[eachAttrKey];
                    const eachPropKey = eachAttrOptions.propKey;
                    const eachPropValue = this['_' + eachPropKey];
                    const eachUpdate = eachAttrOptions.update;
                    if (eachUpdate) {
                        eachUpdate(this, eachPropValue);
                    }
                }
            }
            this.ready = true;
            if (this.emit) this.dispatchEvent(readyEvent);
            if (onConnected) onConnected.call(this);
        };

        prototype.disconnectedCallback = function () {
            if (this.removeRender) this.removeRender();
            if (onDisconnected) onDisconnected.call(this);
        };

        window.customElements.define(options.tag, constructor);
    };
}

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
