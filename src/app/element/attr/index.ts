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
        if (options.observe) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }
        if (!constructor.attrOptionsMap) {
            constructor.attrOptionsMap = {};
        }
        const descriptor = {
            get() {
                return this[_propKey];
            },
            set(value: any, settedAttr?: boolean) {
                let oldValue = this[_propKey];
                const propParser = this[propKey + 'Parser'];
                if (propParser) {
                    const prop = propParser.call(this, value, oldValue);
                    if (prop) {
                        oldValue = prop.oldValue;
                        value = prop.value;
                    }
                }
                if (value === oldValue) return;
                this[_propKey] = value;
                if (this.ready) {
                    const propUpdater = this[propKey + 'Updater'];
                    if (propUpdater) {
                        propUpdater.call(this, value, oldValue);
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
        constructor.attrOptionsMap[attrKey] = options;
        return descriptor;
    };
}
