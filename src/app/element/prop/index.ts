import kebabToCamelCase from '@utils/kebab-to-camel-case';

export function Prop(defaultVal?: any, option?: any) {
    return function (target: any, key: string, descriptor?): any {
        let setter = descriptor.value;
        const
            constructor = (target as any).constructor,
            dashKey = kebabToCamelCase(key),
            initializer = descriptor.initializer,
            _KEY = '_' + key;
        if (typeof defaultVal === 'object') {
            option = defaultVal;
            defaultVal = undefined;
        }
        if (defaultVal !== undefined) {
            target[_KEY] = defaultVal;
        }
        if (initializer) {
            const val = initializer();
            if (typeof val === 'function') {
                setter = val;
            } else {
                target[_KEY] = val;
            }
        }
        if (!constructor.observedAttributes) constructor.observedAttributes = [];
        // for master ui attr
        if (!constructor._attrs) constructor._attrs = {};
        if (!constructor.reflectedAttributes) constructor.reflectedAttributes = [];
        constructor.observedAttributes.push(dashKey);
        constructor._attrs[key] = option;
        if (option && option.reflect) {
            constructor.reflectedAttributes.push(dashKey);
        }
        return {
            get() {
                return this[_KEY];
            },
            set(val) {
                if (option && option.reflect === 'toggle')
                    val = typeof val === 'boolean' ? val : (val === '');
                if (setter) {
                    if (option && option.returnable) {
                        if (setter.call(this, val) === false) return;
                        // defered
                        this[_KEY] = val;
                    } else {
                        this[_KEY] = val;
                        setter.call(this, val);
                    }
                } else {
                    this[_KEY] = val;
                }
                if (option) {
                    if (option.reflect === 'toggle') {
                        this.toggleAttr(key, val);
                    } else if (option.reflect) {
                        this.attr(key, val);
                    }
                    if (this.ready && option.affects) {
                        option.affects.forEach((attrKey) => {
                            this[attrKey] = this['_' + attrKey]
                        });
                    }
                }
            }
        };
    }
}
