interface MasterElement {
    addClass(value: string): this;
    rmClass(value: string): this;
    toggleClass(value: string, state?: boolean): this;
}