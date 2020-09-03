interface Master {
    (selector: string, attrs: { [key: string]: any }, ...children: (Element | string)[]): Element;
    (selector: string): NodeList;
    Render?: any;
}