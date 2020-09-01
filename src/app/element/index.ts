export * from './attr';

const isSupportAdoptedStyle = !!document['adoptedStyleSheets'];

export function Element(option: ElementOption) {
    return function (constructor: any) {
        window.customElements.define(option.tag, constructor);
    };
}

export function Render() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        return {
            value() {
                return (this.shadowRoot || this).innerHTML =
                    (isSupportAdoptedStyle ? '' : `<style>${target.constructor.css}</style>`) +
                    descriptor.value();
            }
        };
    };
}

export function attachShadow() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const css = this.constructor.css;
    if (css && isSupportAdoptedStyle) {
        const styleSheet = new CSSStyleSheet();
        styleSheet['replaceSync'](css);
        shadowRoot.adoptedStyleSheets = [styleSheet];
    }
}
