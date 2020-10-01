import { DialogElement } from "@ui/components/dialog";

interface Master {
    <T extends Element>(selector: string, attrs: { [key: string]: any }, ...children: (Element | string)[]): T;
    (selector: string): NodeList;
    (template: () => Array<any>): MasterTemplate;
    dialog: (options) => DialogElement
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
    $created?: <T extends Element>(element?: T, node?: TemplateNode) => void;
    $removed?: <T extends Element>(element?: T, node?: TemplateNode) => void;
    $updated?: <T extends Element>(element?: T, node?: TemplateNode) => void;
    $data?: any;
}
