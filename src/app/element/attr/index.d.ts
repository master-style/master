interface AttrOptions {
    key?: string;
    observe?: boolean;
    reflect?: boolean;
    propKey?: string;
    setProp?: Function;
    set?: Function;
    default?: any;
    render?: boolean;
    type?: string;
    updater?: (element: any, value: any, oldValue?: any) => void;
    parser?: (element: any, value: any, oldValue?: any) => void;
}