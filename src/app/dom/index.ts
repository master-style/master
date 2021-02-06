import '../template';
import './event-listener';
import './manipulations';
import './traversings';

import { on, off } from './event-listener';
import { attr, toggleAttr, css, addClass, rmClass, html } from './manipulations';

const fragment = document.createDocumentFragment();

export default function $<T extends Element>(
    elementOrSelector: T | string,
    attrOptions?: { [key: string]: any },
    ...children: (Element | string)[]
) {
    const isSelector = typeof elementOrSelector === 'string';
    let element;
    if (isSelector) {
        element = document.querySelector(elementOrSelector as string);
    } else if (isSelector && attrOptions) {
        element = document.createElement(elementOrSelector as string, attrOptions && attrOptions.is ? { is: attrOptions.is } : undefined);
        if (Object.keys(attrOptions).length) element.attr(attrOptions);
        if (children.length) {
            if (children.length > 1) {
                const eachFragment = fragment.cloneNode();
                for (const eachChild of children) {
                    eachFragment.appendChild(
                        typeof eachChild === 'string' ?
                            document.createTextNode(eachChild as any) :
                            eachChild
                    );
                }
                element.appendChild(eachFragment);
            } else {
                element.appendChild(
                    typeof children[0] === 'string' ?
                        document.createTextNode(children[0] as any) :
                        children[0]
                );
            }
        }
    } else {
        element = elementOrSelector;
    }
    return new class {
        on = on;
        off = off;
        css = css;
        attr = attr;
        toggleAttr = toggleAttr;
        addClass = addClass;
        rmClass = rmClass;
        html = html;
    }
}
