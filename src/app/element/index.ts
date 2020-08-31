export * from './attr';

export function Element(option: ElementOption) {
    return function (constructor: any) {
        window.customElements.define(option.tag, constructor);
    };
}
