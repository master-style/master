import 'reflect-metadata';

const DEFAULT_ATTR_OPTION = {
    render: true
};

export interface PropertyOptions {
    render?: boolean;
    type?: string;
    update?: (element: any, value: any, oldValue?: any) => void;
    parse?: (element: any, value: any, oldValue?: any) => any;
}

export function Prop(options?: PropertyOptions) {
    options = { ...DEFAULT_ATTR_OPTION, ...options };
    return (target, key: string): any => {
        options.type = Reflect.getMetadata('design:type', target, key).name;
        const _key = '_' + key;
        const constructor = target.constructor;
        const update = options.update;
        const parse = options.parse;
        const descriptor = {
            get() {
                return this[_key];
            },
            set(value: any) {
                const oldValue = this[_key];
                if (parse) {
                    value = parse(this, value, oldValue);
                }
                if (value === oldValue) return;
                this[_key] = value;
                if (this.initial) {
                    if (update) {
                        update(this, value, oldValue);
                    }
                    if (options.render && this.render) {
                        this.render();
                    }
                }
            }
        };

        // 必須 assign，否則會污染到繼承的父元素
        constructor.propsOptions = Object.assign({}, constructor.propsOptions);
        constructor.propsOptions[key] = options;

        return descriptor;
    };
}
