import isObjLike from '@utils/is-obj-like';

const ElementPrototype = Element.prototype;

ElementPrototype.attr = function (param?: any, value?: any): any {
    const element = this;
    if (value !== undefined) {
        const attrKey = param;
        if (value === null) {
            element.removeAttribute(attrKey);
        } else {
            typeof value === 'boolean'
                ? element.toggleAttribute(attrKey, value)
                : element.setAttribute(attrKey, value);
        }
        return element;
    } else if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const attrKey in param) {
            const attrValue = param[attrKey];
            if (attrValue !== undefined) {
                typeof attrValue === 'boolean'
                    ? element.toggleAttribute(attrKey, attrValue)
                    : element.setAttribute(attrKey, attrValue);
            }
        }
        return element;
    } else if (typeof param === 'string') {
        element.getAttribute((param));
    } else {
        const attrs = element.attributes;
        const attr = {};
        for (const eachAttr of attrs) {
            attr[eachAttr.name] = eachAttr.value;
        }
        return attr;
    }
};

ElementPrototype.toggleAttr = function (param: any, state?: boolean): Element {
    const element = this;
    if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const attrKey in param) {
            element.toggleAttribute(attrKey, param[attrKey]);
        }
    } else {
        element.toggleAttribute(param, state);
    }
    return element;
};
