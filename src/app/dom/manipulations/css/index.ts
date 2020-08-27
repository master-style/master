
import camelToKebabCase from '@utils/camel-to-kebab-case';
import isObjLike from '@utils/is-obj-like';
import isNum from '@utils/is-num';
import autoSuffixPx from '@utils/auto-suffix-px';

Element.prototype.css = function (param?: any, value?: any) {
    const element = this;
    if (value !== undefined) {
        param = camelToKebabCase(param);
        if (autoSuffixPx(param) && isNum(value)) {
            value = value + 'px';
        }
        if (param[0] === '-') {
            // set with css variable
            element.style.setProperty(param, value);
        } else {
            element.style[param] = value;
        }
        return element;
    } else if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            if (key[0] === '-') {
                element.style.setProperty(key, param[key]);
            } else {
                element.style[key] = param[key] +
                    (autoSuffixPx(camelToKebabCase(key)) && isNum(param[key]) ? 'px' : '');
            }
        }
        return element;
    } else if (typeof param === 'string') {
        return window.getComputedStyle((element as any)).getPropertyValue(param);
    } else {
        return window.getComputedStyle((element as any));
    }
};
