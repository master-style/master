
window.Master = (selector: string, attr?: { [key: string]: any }, ...children: (Element | string)[]): any => {
    if (attr) {
        const
            childrenLength = children.length,
            element = document.createElement(selector, attr && attr.is ? { is: attr.is } : undefined);
        if (Object.keys(attr).length) element.attr(attr);
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
};
