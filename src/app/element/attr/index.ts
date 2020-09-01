import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    shadow: false
};

export function Attr(option?: AttrOption) {
    option = Object.assign(DEFAULT_ATTR_OPTION, option);
    return (target: any, propKey: string): any => {
        const attrKey = option.name || camelToKebabCase(propKey);
        const _propKey = '_' + propKey;
        const constructor = target.constructor;
        if (option.observe) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }
        if (!constructor.propOptions) {
            constructor.propOptions = {};
        }
        constructor.propOptions[propKey] = option;
        return {
            get() {
                return this[_propKey];
            },
            set(value) {
                if (this[_propKey] === value) return;
                if (propKey in constructor) {
                    constructor[propKey](this, value, this[_propKey]);
                }
                this[_propKey] = value;
                if (option.reflect && this.isConnected) {
                    this.attr(attrKey, value);
                    if (option.shadow) this.shadow.attr(attrKey, value);
                }
            },
            configurable: true,
            enumerable: true
        };
    };
}
