interface Element {
    attr(key: string): string | undefined | null;
    attr(key: string, value: any): this;
    attr(multi: object): this;
    toggleAttr(key: string, state?: boolean): this;
    toggleAttr(multi: object): this;
}