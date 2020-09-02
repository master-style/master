import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    shadow: false,
    toggle: false
};

export function Attr(option?: AttrOption) {
    option = { ...DEFAULT_ATTR_OPTION, ...option };
    return (target: any, propKey: string): any => {
        option.propKey = propKey;
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
        option.set = function (value) {
            option.toggle
                ? this.toggleAttribute(attrKey, !!value)
                : this.setAttribute(attrKey, value);
            if (option.shadow) {
                option.toggle
                    ? this.shadow.toggleAttribute(attrKey, !!value)
                    : this.shadow.setAttribute(attrKey, value);
            }
        }
        const propDescriptor = {
            get() {
                return option.propValue;
            },
            set(value, fromAttr?: boolean) {
                if (option.propValue === value) return;
                if (propKey in constructor) {
                    constructor[propKey](this, value, option.propValue);
                }
                option.propValue = value;
                if (option.reflect && !fromAttr && this.isConnected) {
                    option.set.call(this, value);
                }
            },
            configurable: true,
            enumerable: true
        };
        option.setProp = propDescriptor.set;
        constructor.attrOptions[attrKey] = option;
        return propDescriptor;
    };
}
