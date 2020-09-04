import camelToKebabCase from '@utils/camel-to-kebab-case';
import 'reflect-metadata';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    toggle: false,
    render: false
};

export function Attr(options?: AttrOptions) {
    options = { ...DEFAULT_ATTR_OPTION, ...options };
    return (target, propKey: string): any => {
        options.type = Reflect.getMetadata('design:type', target, propKey).name;
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
        const descriptor = {
            get() {
                return this[_propKey];
            },
            set(value: any, fromAttr?: boolean) {
                if (this[_propKey] === value) return;
                if (propKey in constructor) {
                    constructor[propKey].call(this, value, this[_propKey]);
                }
                this[_propKey] = value;
                if (this.isConnected) {
                    if (options.reflect && !fromAttr) {
                        if (options.type === 'Boolean') {
                            this.toggleAttribute(attrKey, !!value);
                        } else {
                            this.setAttribute(attrKey, value);
                        }
                    }
                    if (options.render && this.render && this.ready) {
                        this.render();
                    }
                }
            }
        };
        options.setProp = descriptor.set;
        constructor.attrOptions[attrKey] = options;
        return descriptor;
    };
}
