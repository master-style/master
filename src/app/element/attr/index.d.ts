interface AttributeOptions {
    key?: string;
    observe?: boolean;
    reflect?: boolean;
    propKey?: string;
    set?: Function;
    render?: boolean;
    type?: string;
    update?: (element: any, value: any, oldValue?: any) => void;
    parse?: (element: any, value: any, oldValue?: any) => any;
    onRender?: (element: any) => any;
}