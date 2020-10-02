interface AttributeOptions {
    key?: string;
    observe?: boolean;
    reflect?: boolean;
    propKey?: string;
    setProp?: Function;
    set?: Function;
    default?: any;
    render?: boolean;
    type?: string;
    update?: (element: any, value: any, oldValue?: any) => void;
    parse?: (element: any, value: any, oldValue?: any) => any;
}