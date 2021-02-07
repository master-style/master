interface MasterElement {
    on(typeSet: string, factor: string, handle: (event: Event, ...detail: any) => any, option?: ListenerOptions): this;
    on(typeSet: string, handle: (event: Event, ...detail: any) => any, option?: ListenerOptions): this;
}

