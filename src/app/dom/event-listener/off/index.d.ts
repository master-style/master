interface Element {
    off(typeSet: string, factor: string, handle: Function, option?: ListenerOptions): this;
    off(typeSet: string, handle: Function, option?: ListenerOptions): this;
    off(typeSet: string, factor: string, option?: ListenerOptions): this;
    off(typeSet: string, option?: ListenerOptions): this;
    off(option: ListenerOptions): this;
    off(handle: Function): this;
    off(): this;
}
interface Window extends Pick<Element, 'off'> { }
interface Document extends Pick<Element, 'off'> { }