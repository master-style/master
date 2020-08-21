declare const
    anime: any,
    MList,
    MScroll,
    MSelect,
    MInput;

interface String {
    has(target: any): boolean;
    has(target: any, matchWord: any): boolean;
    parse(string: string): any;
    capitalize(): string;
}

interface StringConstructor {
    parse(string: string): any;
}

interface Array<T> {
    has(target: any): boolean;
    remove(array: any): boolean;
}

interface DOMTokenList {
    has(target: any): boolean;
}

interface NodeList extends MasterElements { }
interface HTMLCollection extends MasterElements { }
interface HTMLCollectionOf<T> extends MasterElements { }

interface Element extends MasterCommon {
    addClass(value: string): this;
    hasClass(value: string): Boolean;
    rmClass(value: string): this;
    toggleClass(value: string, state?: boolean): this;
    attr(key: string): string | undefined | null;
    attr(key: string, value: any): this;
    attr(multi: object): this;
    toggleAttr(key: string, state?: boolean): this;
    toggleAttr(multi: object): this;
    aria(key: string): string | undefined | null;
    aria(key: string, value: any): this;
    aria(multi: object): this;
    css(key: string): string;
    css(key: string, value: any): this;
    css(multi: object): this;
    css(): CSSStyleDeclaration;
    $: (selector: string) => NodeList,
    $one: (selector: string) => any;
    $tags: (value: string) => HTMLCollection,
    $classes: (value: string) => HTMLCollection,
    $names: (value: string) => NodeList;
    $child: (selector: string) => Element;
    anime: (keyframe: object, option: object) => any;
}

interface MasterElements extends MasterCommon {
    addClass(value: string): this;
    rmClass(value: string): this;
    attr(key: string, value: any): this;
    attr(multi: object): this;
    aria(key: string, value: any): this;
    aria(multi: object): this;
    css(key: string, value: any): this;
    css(multi: object): this;
    each(callback: (value: any, index?: number) => void): this;
    each(): this;
    indexOf($element: any): number;
    $filter(selector: string): any[];
}

interface MasterCommon {
    on(typeSet: string, factor: string, handle: (event: Event, ...detail: any) => any, option?: ListenerOption): this;
    on(typeSet: string, handle: (event: Event, ...detail: any) => any, option?: ListenerOption): this;
    off(typeSet: string, factor: string, handle: Function, option?: ListenerOption): this;
    off(typeSet: string, handle: Function, option?: ListenerOption): this;
    off(typeSet: string, factor: string, option?: ListenerOption): this;
    off(typeSet: string, option?: ListenerOption): this;
    off(option: ListenerOption): this;
    off(handle: Function): this;
    off(): this;
}

interface Document extends MasterCommon { }

interface Window extends MasterCommon {
    Master(selector: string): NodeList;
    Master(selector: string, attrs?: any, ...$children: Array<Element | string>): Element;
}

interface ListenerOption {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
    id?: any;
}

interface Master {
    (selector: string): any;
    isBool: (value: any) => Boolean;
    isDefined: (value: any) => Boolean;
    isFn: (value: any) => Boolean;
    isNum: (value: any) => Boolean;
    isObj: (value: any) => Boolean;
    isStr: (value: any) => Boolean;
    isUnset: (value: any) => Boolean;
    toDash: (str: string) => any;
    toCamel: (str: string) => any;
    debounce(handle: Function): any;
    debounce(handle: Function, wait: number): any;
    debounce(handle: Function, wait: number, immediate: boolean): any;
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