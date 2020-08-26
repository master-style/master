
// import './event-listener';

declare const
    anime: any,
    MList,
    MScroll,
    MSelect,
    MInput;

// interface Element extends MasterCommon {
//     addClass(value: string): this;
//     hasClass(value: string): Boolean;
//     rmClass(value: string): this;
//     toggleClass(value: string, state?: boolean): this;
//     attr(key: string): string | undefined | null;
//     attr(key: string, value: any): this;
//     attr(multi: object): this;
//     toggleAttr(key: string, state?: boolean): this;
//     toggleAttr(multi: object): this;
//     aria(key: string): string | undefined | null;
//     aria(key: string, value: any): this;
//     aria(multi: object): this;
//     css(key: string): string;
//     css(key: string, value: any): this;
//     css(multi: object): this;
//     css(): CSSStyleDeclaration;
//     $: (selector: string) => NodeList,
//     $one: (selector: string) => any;
//     $tags: (value: string) => HTMLCollection,
//     $classes: (value: string) => HTMLCollection,
//     $names: (value: string) => NodeList;
//     $child: (selector: string) => Element;
//     anime: (keyframe: object, option: object) => any;
// }


interface Window {
    Master(selector: keyof HTMLElementTagNameMap): NodeList;
}

interface Master {
    (selector: string): any;
    extend(...args: any);
    cb: (complete, result?: any) => any;
    // interactive
    $id: (value: string) => Element;
    $one: (selector: string) => Element;
    $tags: (value: string) => HTMLCollection;
    $classes: (value: string) => HTMLCollection;
    $names: (value: string) => NodeList;
    ready: () => null;
}