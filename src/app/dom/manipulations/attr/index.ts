
import camelToKebabCase from '../../../utils/camel-to-kebab-case';
import kebabToCamelCase from '../../../utils/kebab-to-camel-case';
import isObjLike from '../../../utils/is-obj-like';
import parseStr from '../../../utils/parse-str';

const ElementPrototype = Element.prototype;

ElementPrototype.attr = function (param: any, value?: any, prefix?: string): any {
    const target = this;
    prefix = arguments.length === 3 ? arguments[2] + '-' : '';
    if (value !== undefined) {
        const key = camelToKebabCase(prefix + param);
        value === null ? target.removeAttribute(key) : target.setAttribute(key, value);
        return target;
    } else if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            target.setAttribute(camelToKebabCase(prefix + key), param[key]);
        }
        return target;
    } else if (typeof param === 'string') {
        return parseStr(target.getAttribute(camelToKebabCase(prefix + param)));
    } else {
        const attrs = target.attributes;
        const allAttr = {};
        for (const attr of attrs) {
            allAttr[kebabToCamelCase(prefix + attr.name)] = attr.value;
        }
        return allAttr;
    }
};

ElementPrototype.toggleAttr = function (param: any, state?: boolean): Element {
    if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            this.toggleAttribute(camelToKebabCase(key), param[key]);
        }
    } else {
        const kebabCaseKey = camelToKebabCase(param);
        this.toggleAttribute(kebabCaseKey, typeof state === 'boolean' ? state : !(this.getAttribute(kebabCaseKey) === ''));
    }
    return this;
};
