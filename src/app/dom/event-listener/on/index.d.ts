
interface MasterCommon {
    off(typeSet: string, factor: string, handle: Function, option?: ListenerOption): this;
    off(typeSet: string, handle: Function, option?: ListenerOption): this;
    off(typeSet: string, factor: string, option?: ListenerOption): this;
    off(typeSet: string, option?: ListenerOption): this;
    off(option: ListenerOption): this;
    off(handle: Function): this;
    off(): this;
}
