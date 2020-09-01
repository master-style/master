
import camelToKebabCase from '@utils/camel-to-kebab-case';
import kebabToCamelCase from '@utils/kebab-to-camel-case';
import isObjLike from '@utils/is-obj-like';

const ElementPrototype = Element.prototype;

ElementPrototype.attr = function (param?: any, value?: any): any {
    const element = this;
    if (value !== undefined) {
        const attrKey = camelToKebabCase(param);
        if (value === null) {
            element.removeAttribute(attrKey);
        }
        if (typeof value === 'boolean') {
            element.toggleAttribute(attrKey, value);
        } else {
            element.setAttribute(attrKey, value);
        }
        return element;
    } else if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            const attrKey = camelToKebabCase(key);
            const attrValue = param[key];
            if (typeof value === 'boolean') {
                element.toggleAttribute(attrKey, attrValue);
            } else {
                element.setAttribute(attrKey, attrValue);
            }
        }
        return element;
    } else if (typeof param === 'string') {
        element.getAttribute(camelToKebabCase(param))
    } else {
        const attrs = element.attributes;
        const attr = {};
        for (const eachAttr of attrs) {
            attr[kebabToCamelCase(eachAttr.name)] = eachAttr.value;
        }
        return attr;
    }
};

// ElementPrototype.toggleAttr = function (param: any, state?: boolean): Element {
//     const element = this;
//     if (isObjLike(param)) {
//         // tslint:disable-next-line: forin
//         for (const key in param) {
//             element.toggleAttribute(camelToKebabCase(key), param[key]);
//         }
//     } else {
//         const kebabCaseKey = camelToKebabCase(param);
//         element.toggleAttribute(kebabCaseKey,
//             state !== undefined ?
//                 state :
//                 !(element.getAttribute(kebabCaseKey) === '')
//         );
//     }
//     return element;
// };
