import camelToKebabCase from '@utils/camel-to-kebab-case';

const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    mutable: true
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
        if (option.reflect) {
            if (!constructor.reflectedAttributes) {
                constructor.reflectedAttributes = [];
            }
            constructor.reflectedAttributes.push(attrKey);
        }
        return {
            get() {
                return this[_propKey];
            },
            set(value) {
                if (this[_propKey] === value) return;
                this[_propKey] = value;
                if (option.reflect && this.connected) {
                    typeof value === 'boolean'
                        ? this.toggleAttribute(attrKey, value)
                        : this.setAttribute(attrKey, value);
                }
            },
            configurable: true,
            enumerable: true
        }
    };
}
