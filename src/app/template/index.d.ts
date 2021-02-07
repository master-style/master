
interface TemplateNode {
    tag: string;
    attributes?: { [key: string]: any };
    children?: TemplateNode[];
    element?: any;
    attr?: any;
    $on?: any;
    $html?: string;
    $text?: string;
    $if?: boolean;
    $css?: { [key: string]: any };
    $namespace?: string;
    $created?: <T extends Element>(element?: T, node?: TemplateNode) => void;
    $removed?: <T extends Element>(element?: T, node?: TemplateNode) => void;
    $updated?: <T extends Element>(element?: T, node?: TemplateNode) => void;
    $data?: any;
}