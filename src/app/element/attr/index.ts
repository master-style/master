import camelToKebabCase from '@utils/camel-to-kebab-case';
import 'reflect-metadata';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    render: true
};

export function Attr(options?: AttrOptions) {
    options = { ...DEFAULT_ATTR_OPTION, ...options };
    return (target, propKey: string): any => {
        options.type = Reflect.getMetadata('design:type', target, propKey).name;
        options.propKey = propKey;
        const _propKey = '_' + propKey;
        const attrKey = options.key = (options.key || camelToKebabCase(propKey));
        const constructor = target.constructor;
        const updater = options.updater;
        const parser = options.parser;
        const descriptor = {
            get() {
                return this[_propKey];
            },
            set(value: any, settedAttr?: boolean) {
                let oldValue = this[_propKey];
                if (parser) {
                    const prop = parser(this, value, oldValue);
                    if (prop) {
                        oldValue = prop.oldValue;
                        value = prop.value;
                    }
                }
                if (value === oldValue) return;
                this[_propKey] = value;
                if (this.ready) {
                    if (updater) {
                        updater(this, value, oldValue);
                    }
                    if (options.reflect && !settedAttr) {
                        if (options.type === 'Boolean') {
                            this.toggleAttribute(attrKey, !!value);
                        } else {
                            this.setAttribute(attrKey, value);
                        }
                    }
                    if (options.render && this.render) {
                        this.render();
                    }
                }
            }
        };
        options.setProp = descriptor.set;
        options['constructor'] = constructor.name;
        if (options.observe) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }

        if (!constructor.allAttrOptions) {
            constructor.allAttrOptions = {};
        } else {
            constructor.allAttrOptions = Object.assign({}, constructor.allAttrOptions);
        }
        constructor.allAttrOptions[attrKey] = options;
        console.log(constructor.name, constructor.allAttrOptions);

        return descriptor;
    };
}
