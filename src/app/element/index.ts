export * from './prop';

export function Element(option: ElementOption) {
    return function (constructor: any) {
        customElements.define(
            option.tag,
            window[constructor.name] = constructor
        );
    };
}
