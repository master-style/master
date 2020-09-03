import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    shadow: false,
    toggle: false
};

export function Attr(option?: AttrOption) {
    option = { ...DEFAULT_ATTR_OPTION, ...option };
    return function (target: any, propKey: string): any {
        option.propKey = propKey;
        const _propKey = '_' + propKey;
        const attrKey = option.key = camelToKebabCase(propKey);
        const constructor = target.constructor;
        if (option.observe) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }
        if (!constructor.attrOptions) {
            constructor.attrOptions = {};
        }
        option.set = function (value: any, fromAttr?) {
            if (option.toggle) {
                if (!fromAttr) {
                    this.toggleAttribute(attrKey, !!value);
                }
                if (option.shadow) {
                    this.shadow.toggleAttribute(attrKey, !!value);
                }
            } else if (value !== undefined) {
                if (!fromAttr) {
                    this.setAttribute(attrKey, value);
                }
                if (option.shadow) {
                    this.shadow.setAttribute(attrKey, value);
                }
            }
        };
        const propDescriptor = {
            get() {
                return _propKey[this];
            },
            set(value, fromAttr?: boolean) {
                if (this[_propKey] === value) return;
                if (propKey in constructor) {
                    constructor[propKey].call(this, value, this[_propKey]);
                }
                this[_propKey] = value;
                if (option.reflect && this.isConnected) {
                    option.set.call(this, value, fromAttr);
                }
            }
        };
        option.setProp = propDescriptor.set;
        constructor.attrOptions[attrKey] = option;
        return propDescriptor;
    };
}
