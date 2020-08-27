
interface Window {
    Master(selector: string): NodeList;
    Master(selector: string, attrs: { [key: string]: any }, ...children: (Element | string)[]): Element;
}