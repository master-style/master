import camelToKebabCase from '../../utils/camel-to-kebab-case';
import 'reflect-metadata';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    render: true
};

export function Attr(options?: AttributeOptions) {
    options = { ...DEFAULT_ATTR_OPTION, ...options };
    return (target, propKey: string): any => {
        options.type = Reflect.getMetadata('design:type', target, propKey).name;
        options.propKey = propKey;
        const _propKey = '_' + propKey;
        const attrKey = options.key = (options.key || camelToKebabCase(propKey));
        const constructor = target.constructor;
        const update = options.update;
        const parse = options.parse;
        const onRender = options.onRender;
        const descriptor = {
            enumerable: false,
            get() {
                return this[_propKey];
            },
            set(value: any, settedAttr?: boolean) {
                const oldValue = this[_propKey];
                if (parse) {
                    value = parse(this, value, oldValue);
                }
                if (value === oldValue) return;
                this[_propKey] = value;
                if (this.initial) {
                    update?.(this, value, oldValue);
                    if (options.reflect && !settedAttr) {
                        if (options.type === 'Boolean') {
                            this.toggleAttribute(attrKey, !!value);
                        } else {
                            this.setAttribute(attrKey, value);
                        }
                    }
                    if (options.render && this.render) {
                        this.render();
                        onRender?.(this)
                    }
                }
            }
        };
        options.set = descriptor.set;

        if (options.observe) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }

        if (!constructor.attrsOptions) {
            constructor.attrsOptions = {};
        } else {
            // 必須 assign，否則會污染到繼承的父元素
            constructor.attrsOptions = Object.assign({}, constructor.attrsOptions);
        }
        constructor.attrsOptions[attrKey] = options;

        return descriptor;
    };
}

export function attrEnabled(value: any) {
    return value && value !== 'none';
}
