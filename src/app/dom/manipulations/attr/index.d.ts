interface MasterElement {
    attr(): { [key: string]: any };
    attr(key: string): any;
    attr(key: string, value: any): this;
    attr(multi: object): this;
    toggleAttr(key: string, state?: boolean): this;
    toggleAttr(multi: object): this;
}