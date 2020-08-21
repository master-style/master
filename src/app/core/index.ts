const
    $doc = document,
    StringPrototype = String.prototype,
    ArrayPrototype = Array.prototype,
    ElementPrototype = Element.prototype,
    NodeListPrototype = NodeList.prototype,
    HTMLCollectionPrototype = HTMLCollection.prototype,
    MARGIN_KEY = 'margin',
    PADDING_KEY = 'padding',
    WIDTH_KEY = 'width',
    HEIGHT_KEY = 'height',
    TOP_KEY = 'top',
    BOTTOM_KEY = 'bottom',
    LEFT_KEY = 'left',
    RIGHT_KEY = 'right',
    $body = document.body,
    pxProps = new Set([
        WIDTH_KEY,
        HEIGHT_KEY,
        'min-' + WIDTH_KEY,
        'min-' + HEIGHT_KEY,
        'max-' + WIDTH_KEY,
        'max-' + HEIGHT_KEY,
        TOP_KEY,
        BOTTOM_KEY,
        LEFT_KEY,
        RIGHT_KEY,
        MARGIN_KEY,
        MARGIN_KEY + '-' + TOP_KEY,
        MARGIN_KEY + '-' + BOTTOM_KEY,
        MARGIN_KEY + '-' + LEFT_KEY,
        MARGIN_KEY + '-' + RIGHT_KEY,
        PADDING_KEY,
        PADDING_KEY + '-' + TOP_KEY,
        PADDING_KEY + '-' + BOTTOM_KEY,
        PADDING_KEY + '-' + LEFT_KEY,
        PADDING_KEY + '-' + RIGHT_KEY,
    ]),
    isBool = (v: any) => typeof v === 'boolean',
    isDefined = (v: any) => v !== undefined,
    isFn = (v: any) => typeof v === 'function',
    isNum = (v: any) => typeof v === 'number' && !isNaN(v),
    isObj = (val: any) => val != null && typeof val === 'object' && Array.isArray(val) === false,
    isStr = (v: any) => typeof v === 'string',
    isUnset = (v: any) => typeof v === undefined || typeof v === null,
    toDash = (str: string) =>
        str.replace(/([A-Z])/g, g => '-' + g[0]).toLowerCase(),
    toCamel = (str: string) =>
        str.split('-').map((eachStr, i) =>
            (i === 0 ? eachStr[0] : eachStr[0].toUpperCase()) + eachStr.slice(1)
        ).join(''),
    cb = function (cb, result?: any) {
        if (cb !== undefined) cb.call(this, result);
        return result;
    },
    hasScrollValue = (str) => str === 'auto' || str === 'scroll' || str === 'overlay',
    isScrollable = (element: HTMLElement, dir?: any) => {
        const { overflowY, overflowX } = window.getComputedStyle(element);
        if (!isDefined(dir) || dir === 'y') {
            return hasScrollValue(overflowY);
        } else if (dir === 'x') {
            return hasScrollValue(overflowX);
        } else if (dir === true) {
            return hasScrollValue(overflowX) && hasScrollValue(overflowY);
        }
        return false;
    },
    // $children 尚未實作
    Master = (selector: string, attrs?: any, ...$children: Array<any>): any => {
        if (attrs) {
            const
                childrenLength = $children.length,
                $el = $doc.createElement(selector, attrs && attrs.is ? { is: attrs.is } : undefined);
            if (Object.keys(attrs).length) $el.attr(attrs);
            if (childrenLength) {
                if (childrenLength > 1) {
                    const $fragment = document.createDocumentFragment();
                    for (const $child of $children) {
                        $fragment.appendChild(
                            isStr($child) ?
                                document.createTextNode($child as any) :
                                $child
                        );
                    }
                    $el.appendChild($fragment);
                } else {
                    $el.appendChild(
                        isStr($children[0]) ?
                            document.createTextNode($children[0] as any) :
                            $children[0]
                    );
                }
            }
            return $el;
        } else {
            return $doc.querySelectorAll(selector);
        }
    },
    $one = (selector: string): any => $doc.querySelector(selector),
    $id = (id: string): any => $doc.getElementById(id),
    $tags = (tagName: string): any => $doc.getElementsByTagName(tagName),
    $classes = (className: string): any => $doc.getElementsByClassName(className),
    $names = (name: string): any => $doc.getElementsByName(name),
    $scrollBody = (element, dir?) => {
        const body = element.parentNode || $body;
        if (!body || body.tagName === 'BODY') {
            return body;
        } else if (isScrollable(body.parentNode, dir)) {
            return body;
        } else {
            return $scrollBody(body, dir);
        }
    },
    $scrollWrap = (wrap, dir?) => {
        if (!wrap || wrap.tagName === 'HTML' || wrap.tagName === 'BODY') {
            return window;
        } else if (isScrollable(wrap, dir)) {
            return wrap;
        } else {
            return $scrollWrap(wrap.parentNode, dir);
        }
    },
    // https://github.com/component/debounce
    debounce = (handle, wait?, immediate?) => {
        let timeout, args, context, timestamp, result;
        if (!wait || wait === true) wait = 100;

        function later() {
            const last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = handle.apply(context, args);
                    context = args = null;
                }
            }
        }

        const debounced = function () {
            context = this;
            args = arguments;
            timestamp = Date.now();
            const callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = handle.apply(context, args);
                context = args = null;
            }

            return result;
        };

        debounced.clear = function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };

        debounced.flush = function () {
            if (timeout) {
                result = handle.apply(context, args);
                context = args = null;

                clearTimeout(timeout);
                timeout = null;
            }
        };
        return debounced;
    },
    extend = function (...args) {
        var deep = false;
        if (typeof args[0] == 'boolean') {
            deep = args.shift();
        }
        var result = args[0];
        if (isUnextendable(result)) {
            throw new Error('extendee must be an object');
        }
        var extenders = args.slice(1);
        var len = extenders.length;
        for (var i = 0; i < len; i++) {
            var extender = extenders[i];
            for (var key in extender) {
                if (extender.hasOwnProperty(key)) {
                    var value = extender[key];
                    if (deep && isCloneable(value)) {
                        var base = Array.isArray(value) ? [] : {};
                        result[key] = extend(
                            true,
                            result.hasOwnProperty(key) && !isUnextendable(result[key])
                                ? result[key]
                                : base,
                            value
                        );
                    } else {
                        result[key] = value;
                    }
                }
            }
        }
        return result;
    },
    $ = Object.assign(Master, {
        isBool,
        isDefined,
        isFn,
        isNum,
        isObj,
        isStr,
        isUnset,
        toDash,
        toCamel,
        debounce,
        cb,
        extend,
        $id,
        $tags,
        $classes,
        $names,
        $one,
        $scrollBody,
        $scrollWrap,
        ready: (handle: () => any) => document.addEventListener('DOMContentLoaded', handle)
    }),
    $window = Object.assign(window, {
        Master,
        $: Master,
        M: Master
    });

function isCloneable(obj) {
    return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

function isUnextendable(val) {
    return !val || (typeof val != 'object' && typeof val != 'function');
}

// Extend the DOM with these above custom methods
$window.on = $doc.on = ElementPrototype.on = function (typeSet: string, factor, handle, option?: ListenerOption) {
    const $target = this;
    if (isFn(factor)) {
        option = handle;
        handle = factor;
        factor = null;
    }
    $target.listeners = $target.listeners || [];
    const listen = function (event: any) {
        let $thisArg = $target;
        // event delegation
        if (factor) {
            let $factor;
            if (isStr(factor)) {
                $factor = event.target.closest(factor);
            } else if (event.target === factor) {
                $factor = event.target;
            }
            if ($factor) {
                $thisArg = $factor;
            } else {
                return;
            }
        }
        if (option && option.once) $target.off(typeSet, factor, handle, option);
        let detail = event.detail;
        detail = Array.isArray(detail) ? detail : [detail];
        if (handle) handle.call($thisArg, event, ...detail);
    };
    for (const eachTypeSet of typeSet.split(' ')) {
        const splits = eachTypeSet.split('.');
        const type = splits[0];
        $target.listeners.push({
            typeSet: eachTypeSet,
            type,
            factor,
            handle,
            option: option || false,
            listen
        });
        $target.addEventListener(type, listen, option || false);
    }
    return $target;
};

$window.off = $doc.off = ElementPrototype.off = function (typeSet?: any, factor?, handle?, option?: ListenerOption) {
    const
        $target = this,
        listeners = $target.listeners;
    if (!listeners) return $target;
    if (typeSet) {
        if (isStr(typeSet)) {
            if (isFn(factor)) {
                option = handle;
                handle = factor;
                factor = null;
            } else if (factor instanceof Object) {
                option = factor;
                factor = undefined;
            }
            const typeSets = typeSet.split(' ');
            for (const eachTypeSet of typeSets) {
                const splits = eachTypeSet.split('.');
                let namespaces: string[];
                let type: string;
                if (eachTypeSet[0] !== '.') {
                    type = splits[0];
                }
                namespaces = splits.slice(1);
                for (let listenerIndex = listeners.length - 1; listenerIndex >= 0; listenerIndex--) {
                    const listener = listeners[listenerIndex];
                    let remove = false;
                    if (type) {
                        remove = type === listener.type;
                        if (namespaces.length)
                            remove = remove && listener.typeSet.has(namespaces, '.');
                        if (
                            option &&
                            option.id &&
                            listener.option &&
                            listener.option.id
                        )
                            remove = remove && option.id === listener.option.id;
                    } else if (namespaces.length) {
                        remove = listener.typeSet.has(namespaces, '.')
                    } else {
                        continue;
                    }
                    if (handle) remove = remove && handle === listener.handle;
                    if (factor) remove = remove && factor === listener.factor;
                    if (remove) {
                        $target.removeEventListener(listener.type, listener.listen, listener.option || false);
                        listeners.splice(listenerIndex, 1);
                    }
                }
            }
        } else if (isFn(typeSet)) {
            handle = typeSet;
            for (let listenerIndex = listeners.length - 1; listenerIndex >= 0; listenerIndex--) {
                const listener = listeners[listenerIndex];
                if (listener.handle === handle) {
                    $target.removeEventListener(listener.type, listener.listen, listener.option || false);
                    listeners.splice(listenerIndex, 1);
                }
            }
        } else {
            option = typeSet;
            for (let listenerIndex = listeners.length - 1; listenerIndex >= 0; listenerIndex--) {
                const listener = listeners[listenerIndex];
                if (listener.option && listener.option.id === option.id) {
                    $target.removeEventListener(listener.type, listener.listen, listener.option || false);
                    listeners.splice(listenerIndex, 1);
                }
            }
        }
    } else {
        for (const listener of $target.listeners) {
            $target.removeEventListener(listener.type, listener.listen, listener.option);
        }
        $target.listeners = null;
    }
    return $target;
};

Object.assign(StringPrototype, {
    has(target, splitChar?) {
        if (!this.length) return false;
        if (!splitChar) {
            return this.indexOf(target) !== -1;
        } else {
            const sources = this.split(splitChar);
            let count = target.length;
            for (const eachSource of sources) {
                if (!Array.isArray(target)) {
                    if (eachSource === target) return true;
                } else {
                    if (eachSource === '') count--;
                    target.forEach((eachTarget) => {
                        if (eachSource === eachTarget) count--;
                    });
                }
            }
            return count === 0;
        }
    },
    capitalize() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
});

String.parse = function (string) {
    if (string === '' || string === null) {
        return string;
    } else if (string === 'true') {
        return true;
    } else if (string === 'false') {
        return false;
    } else {
        return isNaN(+string) ? string : +string;
    }
};

ArrayPrototype.has = function (target) {
    if (!this.length) return false;
    if (!Array.isArray(target)) {
        return this.indexOf(target) !== -1;
    } else {
        let count = target.length;
        this.forEach((eachSource) => {
            target.forEach((eachTarget) => {
                if (eachSource === eachTarget) count--;
            });
        });
        return count === 0;
    }
};

ArrayPrototype.remove = function (target) {
    if (!this.length || this.indexOf(target) === -1) return false;
    this.splice(this.indexOf(target), 1);
    return true;
};

ElementPrototype.append = DocumentFragment.prototype.append = function (...$elements): any {
    for (const element of $elements) {
        if (element) this.appendChild(element);
    }
    return this;
}

Object.assign(ElementPrototype, {
    addClass(value?: string): any {
        if (value) {
            this.classList.add(...value.split(' '));
        }
        return this;
    },
    rmClass(value: string): any {
        if (value) {
            this.classList.remove(...value.split(' '));
        }
        return this;
    },
    toggleClass(value: string, state?: boolean): any {
        state = isBool(state) ? state : !this.hasClass(value);
        return state ? this.addClass(value) : this.rmClass(value);
    },
    hasClass(value: string): boolean {
        return this.classList.contains(value);
    },
    attr(param: any, value?: any, prefix?: string): any {
        const $target = this;
        prefix = arguments.length === 3 ? arguments[2] + '-' : '';
        if (isDefined(value)) {
            const key = toDash(prefix + param);
            value === null ? $target.removeAttribute(key) : $target.setAttribute(key, value);
            return $target;
        } else if (isObj(param)) {
            // tslint:disable-next-line: forin
            for (const key in param) {
                $target.setAttribute(toDash(prefix + key), param[key]);
            }
            return $target;
        } else if (isStr(param)) {
            return String.parse($target.getAttribute(toDash(prefix + param)));
        } else {
            const attrs = $target.attributes;
            const allAttr = {};
            for (const attr of attrs) {
                allAttr[toCamel(prefix + attr.name)] = attr.value;
            }
            return allAttr;
        }
    },
    toggleAttr(param: any, state?: boolean): any {
        if (isObj(param)) {
            // tslint:disable-next-line: forin
            for (const key in param) {
                this.toggleAttribute(toDash(key), param[key]);
            }
        } else {
            const dashKey = toDash(param);
            this.toggleAttribute(dashKey, isBool(state) ? state : !(this.getAttribute(dashKey) === ''));
        }
        return this;
    },
    aria(param: any, value?: any) {
        return this.attr(param, value, 'aria');
    },
    css(param?: any, value?: any): any {
        const $target = this;
        if (isDefined(value)) {
            param = toDash(param);
            if (pxProps.has(param) && isNum(value)) {
                value = value + 'px';
            }
            if (param[0] === '-') {
                $target.style.setProperty(param, value);
            } else {
                $target.style[param] = value;
            }
            return $target;
        } else if (isObj(param)) {
            // tslint:disable-next-line: forin
            for (const key in param) {
                if (key[0] === '-') {
                    $target.style.setProperty(key, param[key]);
                } else {
                    $target.style[key] = param[key] +
                        (pxProps.has(toDash(key)) && isNum(param[key]) ? 'px' : '');
                }
            }
            return $target;
        } else if (isStr(param)) {
            return $window.getComputedStyle($target).getPropertyValue(param);
        } else {
            return $window.getComputedStyle($target);
        }
    },
    anime(keyframe: any, option: any, complete: () => void) {
        const $target = this;
        let animation: any;
        if (option.reverse) {
            for (const key in keyframe)
                keyframe[key].reverse();
        }
        if (window['Animation']) {
            const x = keyframe.translateX;
            const y = keyframe.translateY;
            const scale = keyframe.scale;
            const scaleX = keyframe.scaleX;
            const scaleY = keyframe.scaleY;
            if (
                isDefined(x) ||
                isDefined(y) ||
                isDefined(scaleX) ||
                isDefined(scaleY) ||
                isDefined(scale)
            ) {
                let transform = '';
                let toTransform = '';
                if ($.isDefined(x)) {
                    transform += 'translateX(' + x[0] + ')';
                    toTransform += 'translateX(' + x[1] + ')';
                }
                if ($.isDefined(y)) {
                    transform += ' translateY(' + y[0] + ')';
                    toTransform += ' translateY(' + y[1] + ')';
                }
                if ($.isDefined(scaleX)) {
                    transform += ' scaleX(' + scaleX[0] + ')';
                    toTransform += ' scaleX(' + scaleX[1] + ')';
                }
                if ($.isDefined(scaleY)) {
                    transform += ' scaleY(' + scaleY[0] + ')';
                    toTransform += ' scaleY(' + scaleY[1] + ')';
                }
                if ($.isDefined(scale)) {
                    transform += ' scale(' + scale[0] + ')';
                    toTransform += ' scale(' + scale[1] + ')';
                }
                delete keyframe.translateX;
                delete keyframe.translateY;
                delete keyframe.scaleX;
                delete keyframe.scaleY;
                if (transform) {
                    keyframe.transform = [transform, toTransform];
                }
            }

            animation = $target.animate(keyframe, option);
            animation.onfinish = () => {
                animation.reversed = animation.playbackRate === -1;
                cb.call($target, complete);
            };
        } else {
            if (option.easing) {
                option.easing = toCamel(option.easing);
            } else {
                option.easing = 'linear'
            }
            animation = anime({
                targets: $target,
                ...keyframe,
                ...option
            });
            animation.finished.then(() => {
                if (option.fill !== 'forwards') {
                    // tslint:disable-next-line: forin
                    for (const key in keyframe) {
                        $target.style[key] = null;
                    }
                    if (
                        isDefined(keyframe.translateX) ||
                        isDefined(keyframe.translateY) ||
                        isDefined(keyframe.scale)
                    ) {
                        $target.style.transform = null;
                    }
                }
                cb.call($target, complete);
            });
        }
        return animation;
    },
    $(selector: string): any { return this.querySelectorAll(selector) },
    $one(selector: string): any { return this.querySelector(selector) },
    $tags(tagName: string): any { return this.getElementsByTagName(tagName) },
    $classes(className: string): any { return this.getElementsByClassName(className) },
    $names(name: string): any { return this.getElementsByName(name) },
    $child(selector: string) {
        for (const $el of this.children) {
            if ($el.matches(selector)) {
                return $el;
            }
        }
    },
    $children(selector: string) {
        const $elements = [];
        for (const $el of this.children) {
            if ($el.matches(selector)) {
                $elements.push($el);
            }
        }
        return $elements;
    }
});

['addClass', 'rmClass', 'toggleClass', 'toggleAttr', 'css', 'attr', 'aria', 'on', 'off'].forEach((property: string) => {
    HTMLCollectionPrototype[property] = NodeListPrototype[property] = function (...args: []) {
        for (const eachElement of this) {
            eachElement[property](...args);
        }
        return this;
    };
});

HTMLCollectionPrototype.each = NodeListPrototype.each = function (cb?) {
    for (let i = 0; i < this.length; i++) {
        if (cb && cb(this[i], i) === false) break;
    }
    return this;
};

HTMLCollectionPrototype.indexOf = NodeListPrototype.indexOf = function (target: any) {
    let index = -1;
    if (target) {
        for (let i = 0; i < this.length; i++) {
            if (isStr(target)) {
                if (this[i].matches(target)) {
                    index = i;
                    break;
                }
                continue;
            } else if (this[i] === target) {
                index = i;
                break;
            };
        }
    }
    return index;
};

HTMLCollectionPrototype.$filter = NodeListPrototype.$filter = function (selector) {
    const $targets = [];
    for (const $target of this) {
        if ($target.matches(selector)) $targets.push($target);
    }
    return $targets;
};

document.body.on('tap', '[href]', function () {
    if (this.href) return;
    const target = this.attr('target') || '';
    const href = this.attr('href');
    if (href)
        target.has('blank') ? window.open(href) : window.location.href = href;
}, { passive: true });

// HTMLCollectionPrototype.filter = Array.prototype.filter;

    // const parseStrIntoJSON = (value) => {
    //     const firstChar = value.trim().slice(0, 1);
    //     return (firstChar === '{' || firstChar === '[') ? parseJSON(value.replace(/'/g, '"')) : value;
    // };

    // function parseValue(value: any) {
    //     if (value === 'true' || value === true) {
    //         return true;
    //     } else if (value === 'false' || value === false) {
    //         return false;
    //     } else {
    //         return value.match(/^-?\d*(\.\d+)?$/) ? +value : parseStrIntoJSON(value);
    //     }
    // }
