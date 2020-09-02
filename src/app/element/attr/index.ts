import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    set: true,
    get: true,
    shadow: false,
    toggle: false
};

export function Attr(option?: AttrOption) {
    option = { ...DEFAULT_ATTR_OPTION, ...option };
    return (target: any, propKey: string): any => {
        option.propKey = propKey;
        const attrKey = option.key = camelToKebabCase(propKey);
        const _propKey = '_' + propKey;
        const constructor = target.constructor;
        if (option.get) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }
        if (!constructor.attrOptions) {
            constructor.attrOptions = {};
        }
        const propDescriptor = {
            get() {
                return this[_propKey];
            },
            set(value, fromAttr?: boolean) {
                if (this[_propKey] === value) return;
                if (propKey in constructor) {
                    constructor[propKey](this, value, this[_propKey]);
                }
                this[_propKey] = value;
                if (option.set && !fromAttr && this.isConnected) {
                    console.log('set attribute', propKey);
                    option.toggle
                        ? this.toggleAttribute(attrKey, !!value)
                        : this.setAttribute(attrKey, value);
                    if (option.shadow) {
                        option.toggle
                            ? this.shadow.toggleAttribute(attrKey, !!value)
                            : this.shadow.setAttribute(attrKey, value);
                    }
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
