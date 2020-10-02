interface PropertyOptions {
    render?: boolean;
    type?: string;
    update?: (element: any, value: any, oldValue?: any) => void;
    parse?: (element: any, value: any, oldValue?: any) => any;
}