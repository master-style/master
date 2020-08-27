
import camelToKebabCase from '@utils/camel-to-kebab-case';
import kebabToCamelCase from '@utils/kebab-to-camel-case';
import isObjLike from '@utils/is-obj-like';
import parseStr from '@utils/parse-str';

const ElementPrototype = Element.prototype;

ElementPrototype.attr = function (param: any, value?: any, prefix?: string): any {
    const element = this;
    prefix = arguments.length === 3 ? arguments[2] + '-' : '';
    if (value !== undefined) {
        const kebabCaseKey = camelToKebabCase(prefix + param);
        value === null ?
            element.removeAttribute(kebabCaseKey) :
            element.setAttribute(kebabCaseKey, value);
        return element;
    } else if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            element.setAttribute(camelToKebabCase(prefix + key), param[key]);
        }
        return element;
    } else if (typeof param === 'string') {
        return parseStr(
            element.getAttribute(camelToKebabCase(prefix + param))
        );
    } else {
        const attrs = element.attributes;
        const attr = {};
        for (const eachAttr of attrs) {
            attr[kebabToCamelCase(prefix + eachAttr.name)] = eachAttr.value;
        }
        return attr;
    }
};

ElementPrototype.toggleAttr = function (param: any, state?: boolean): Element {
    const element = this;
    if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            element.toggleAttribute(camelToKebabCase(key), param[key]);
        }
    } else {
        const kebabCaseKey = camelToKebabCase(param);
        element.toggleAttribute(kebabCaseKey,
            typeof state === 'boolean' ?
                state :
                !(element.getAttribute(kebabCaseKey) === '')
        );
    }
    return element;
};
