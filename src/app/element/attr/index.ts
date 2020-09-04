import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    toggle: false,
    render: false
};

export function Attr(options?: AttrOptions) {
    options = { ...DEFAULT_ATTR_OPTION, ...options };
    return function (target: any, propKey: string): any {
        options.propKey = propKey;
        const _propKey = '_' + propKey;
        const attrKey = options.key = camelToKebabCase(propKey);
        const constructor = target.constructor;
        if (options.observe) {
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
                    constructor[propKey].call(this, value, this[_propKey]);
                }
                this[_propKey] = value;
                if (this.isConnected) {
                    if (options.reflect && !fromAttr) {
                        this.attr(attrKey, value);
                    }
                    if (options.render && this.render && this.ready) {
                        this.render();
                    }
                }
            }
        };
        options.setProp = propDescriptor.set;
        constructor.attrOptions[attrKey] = options;
        return propDescriptor;
    };
}
