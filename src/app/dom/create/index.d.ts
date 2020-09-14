interface Master {
    (selector: string, attrs: { [key: string]: any }, ...children: (Element | string)[]): Element;
    (selector: string): NodeList;
    (template: () => Array<any>): MasterTemplate;
}

interface TemplateNode {
    tag: string;
    attr?: { [key: string]: any };
    children?: TemplateNode[];
    element?: any;
    $html?: string;
    $text?: string;
    $if?: boolean;
    $css?: { [key: string]: any };
    $created?: (element: Element) => void;
    $removed?: (element: Element) => void;
}
