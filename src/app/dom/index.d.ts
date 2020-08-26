import './event-listener';
import './manipulations';
import './traversing';

declare const
    anime: any,
    MList,
    MScroll,
    MSelect,
    MInput;

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

interface Document extends MasterCommon { }

interface Window extends MasterCommon {
    Master(selector: string): NodeList;
    Master(selector: string, attrs?: any, ...$children: Array<Element | string>): Element;
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