export * from './attr';

export function Element(option: ElementOption) {
    return function (constructor: any) {
        constructor.prototype.ready = false;
        window.customElements.define(option.tag, constructor);
    };
}
