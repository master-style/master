interface Master {
    <T extends Element>(selector: string, attrs: { [key: string]: any }, ...children: (Element | string)[]): T;
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
    $namespace?: string;
    $created?: (element: Element) => void;
    $removed?: (element: Element) => void;
    $updated?: (element: Element) => void;
}
