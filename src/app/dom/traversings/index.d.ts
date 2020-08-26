interface HTMLCollection extends Pick<Array<Element>, 'filter' | 'forEach' | 'indexOf'> { }
interface NodeList extends Pick<Array<Element>, 'filter' | 'indexOf'> { }

interface Window {
    Master(selector: keyof HTMLElementTagNameMap): NodeList;
}