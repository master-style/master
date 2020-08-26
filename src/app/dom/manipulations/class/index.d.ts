interface Element {
    addClass(value: string): this;
    hasClass(value: string): Boolean;
    rmClass(value: string): this;
    toggleClass(value: string, state?: boolean): this;
}