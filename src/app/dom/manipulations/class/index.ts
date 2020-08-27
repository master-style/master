
const ElementPrototype = Element.prototype;

ElementPrototype.addClass = function (value?: string): any {
    if (value) {
        this.classList.add(...value.split(' '));
    }
    return this;
};

ElementPrototype.rmClass = function (value: string): any {
    if (value) {
        this.classList.remove(...value.split(' '));
    }
    return this;
};

ElementPrototype.toggleClass = function (value: string, state?: boolean): any {
    state = typeof state === 'boolean' ? state : !this.hasClass(value);
    return state ? this.addClass(value) : this.rmClass(value);
};
