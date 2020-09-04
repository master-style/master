import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    shadow: false,
    toggle: false,
    render: false
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
                if (this.isConnected) {
                    if (option.reflect) {
                        if (!fromAttr) this.attr(value);
                    }
                    if (option.render && this.template) {
                        this.template.render(this.shadowRoot || this);
                    }
                }
            }
        };
        option.setProp = propDescriptor.set;
        constructor.attrOptions[attrKey] = option;
        return propDescriptor;
    };
}
