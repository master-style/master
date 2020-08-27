
function Master(selector: string, attrs?: { [key: string]: any }, ...children: (Element | string)[]): any {
    if (attrs) {
        const
            childrenLength = children.length,
            element = document.createElement(selector, attrs && attrs.is ? { is: attrs.is } : undefined);
        if (Object.keys(attrs).length) element.attr(attrs);
        if (childrenLength) {
            if (childrenLength > 1) {
                const $fragment = document.createDocumentFragment();
                for (const $child of children) {
                    $fragment.appendChild(
                        typeof $child === 'string' ?
                            document.createTextNode($child as any) :
                            $child
                    );
                }
                element.appendChild($fragment);
            } else {
                element.appendChild(
                    typeof children[0] === 'string' ?
                        document.createTextNode(children[0] as any) :
                        children[0]
                );
            }
        }
        return element;
    } else {
        return document.querySelectorAll(selector);
    }
}

window.Master = Master;
