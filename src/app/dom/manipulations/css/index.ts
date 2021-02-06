
import camelToKebabCase from '../../../utils/camel-to-kebab-case';
import isObjLike from '../../../utils/is-obj-like';
import isNum from '../../../utils/is-num';
import isAutoPx from '../../../utils/is-auto-px';

export function css(param?: any, value?: any) {
    const element = this;
    if (value !== undefined) {
        if (param[0] === '-') {
            // set with css variable
            element.style.setProperty(param, value);
            return element;
        }
        param = camelToKebabCase(param);
        if (isAutoPx(param) && isNum(value)) {
            value += 'px';
        }
        element.style[param] = value;
        return element;
    } else if (isObjLike(param)) {
        // tslint:disable-next-line: forin
        for (const key in param) {
            const propValue = param[key];
            if (key[0] === '-') {
                element.style.setProperty(key, propValue);
            } else {
                element.style[key] = propValue +
                    (isAutoPx(camelToKebabCase(key)) && isNum(propValue) ?
                        'px' :
                        ''
                    );
            }
        }
        return element;
    } else if (typeof param === 'string') {
        return window.getComputedStyle(element).getPropertyValue(param);
    } else {
        return window.getComputedStyle(element);
    }
};
