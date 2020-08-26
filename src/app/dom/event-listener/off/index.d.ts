
interface MasterCommon {
    on(typeSet: string, factor: string, handle: (event: Event, ...detail: any) => any, option?: ListenerOption): this;
    on(typeSet: string, handle: (event: Event, ...detail: any) => any, option?: ListenerOption): this;
}