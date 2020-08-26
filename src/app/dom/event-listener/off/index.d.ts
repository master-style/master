interface Element {
    off(typeSet: string, factor: string, handle: Function, option?: Master.ListenerOption): this;
    off(typeSet: string, handle: Function, option?: Master.ListenerOption): this;
    off(typeSet: string, factor: string, option?: Master.ListenerOption): this;
    off(typeSet: string, option?: Master.ListenerOption): this;
    off(option: Master.ListenerOption): this;
    off(handle: Function): this;
    off(): this;
}
interface Window extends Pick<Element, 'off'> { }
interface Document extends Pick<Element, 'off'> { }