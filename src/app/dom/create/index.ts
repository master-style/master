const fragment = document.createDocumentFragment();

window.Master = function (selector: any, attr?: { [key: string]: any }, ...children: (Element | string)[]) {
    if (typeof selector === 'function') {
        return new MasterTemplate(selector);
    } else if (attr) {
        const element: Element = document.createElement(selector, attr && attr.is ? { is: attr.is } : undefined);
        if (Object.keys(attr).length) element.attr(attr);
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
        return (element as any);
    } else {
        return document.querySelectorAll(selector);
    }
};

class MasterTemplate {

    constructor(
        private template: () => any[]
    ) { }

    container: any;
    nodes: TemplateNode[] = [];

    render(container) {

        // tslint:disable-next-line: prefer-for-of
        const oldNodes: TemplateNode[] = this.nodes;
        this.nodes = [];

        (function generate(tokens: any[], eachNodes: TemplateNode[]) {
            let eachNode: TemplateNode;
            for (const token of tokens) {
                const tokenType = typeof token;
                if (tokenType === 'string') {
                    eachNode = { tag: token };
                    eachNodes.push(eachNode);
                } else {
                    const hasIf = eachNode.hasOwnProperty('$if');
                    const whether = hasIf && eachNode.$if || !hasIf;
                    if (Array.isArray(token) && whether) {
                        generate(token, eachNode.children = []);
                    } else if (tokenType === 'function' && whether) {
                        const children = token().reduce((acc, eachToken) => {
                            return acc.concat(eachToken);
                        }, []);
                        generate(children, eachNode.children = []);
                    } else if (tokenType === 'object') {
                        const attr = token;
                        eachNode.attr = {};
                        for (const attrKey in attr) {
                            const eachAttrValue = attr[attrKey];
                            if (attrKey[0] !== '$') {
                                eachNode.attr[attrKey] = eachAttrValue;
                            } else {
                                eachNode[attrKey] = eachAttrValue;
                            }
                        }
                    }
                }
            }
        })(this.template(), this.nodes);

        if (this.nodes && this.container === container) {
            (function renderNodes(eachNodes, eachOldNodes, parent) {
                if (!eachNodes.length && eachOldNodes.length) {
                    eachOldNodes
                        .forEach((eachNode) => {
                            const element = eachNode.element;
                            if (element) {
                                element.remove();
                                const removed = eachNode.$removed;
                                if (removed) removed(element, eachNode);
                            }
                        });
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < eachNodes.length; i++) {
                        const eachNode = eachNodes[i];
                        let eachOldNode = eachOldNodes[i];
                        const eachOldElement = eachOldNode?.element;
                        const hasIf = eachNode.hasOwnProperty('$if');
                        const whether = hasIf && eachNode.$if || !hasIf;

                        if (eachNodes.length - 1 === i && eachOldNodes[i + 1]) {
                            eachOldNodes.splice(i + 1)
                                .forEach((deletedOldNode) => {
                                    deletedOldNode.element.remove();
                                    const removed = deletedOldNode.$removed;
                                    if (removed) removed(deletedOldNode.element, deletedOldNode);
                                });
                        }

                        if (eachOldElement && eachNode.tag === eachOldNode.tag) {
                            if (whether) {
                                const element = eachNode.element = eachOldElement;
                                const attr = eachNode.attr;
                                const oldAttr = eachOldNode?.attr;
                                if (attr) {
                                    for (const eachAttrKey in attr) {
                                        const value = attr[eachAttrKey];
                                        const oldValue = oldAttr[eachAttrKey];
                                        if (value !== oldValue) {
                                            element.attr(eachAttrKey, value);
                                        }
                                    }
                                }
                                const css = eachNode.$css;
                                const oldCss = eachOldNode?.$css;
                                if (css) {
                                    for (const eachPropKey in css) {
                                        const value = css[eachPropKey];
                                        const oldValue = oldCss[eachPropKey];
                                        if (value !== oldValue) {
                                            element.css(eachPropKey, value);
                                        }
                                    }
                                }
                                if (
                                    eachNode.$html !== undefined &&
                                    eachNode.$html !== eachOldNode.$html
                                ) {
                                    element.innerHTML = eachNode.$html;
                                    if (eachOldNode) eachOldNode.children = [];
                                } else if (
                                    eachNode.$text !== undefined &&
                                    eachNode.$text !== eachOldNode.$text
                                ) {
                                    element.textContent = eachNode.$text;
                                }
                                if (eachNode.children) {
                                    renderNodes(eachNode.children, eachOldNode.children, element);
                                }
                                const updated = eachNode.$updated;
                                if (updated) updated(element, eachNode);
                            } else {
                                eachOldElement.remove();
                                const removed = eachNode.$removed;
                                if (removed) removed(eachOldElement);
                            }
                        } else if (whether) {
                            let element;
                            if (eachNode.$namespace) {
                                element = document.createElementNS(eachNode.$namespace, eachNode.tag);
                            } else {
                                element = document.createElement(eachNode.tag);
                            }
                            eachNode.element = element;
                            if (eachOldElement) {
                                eachOldElement.before(element);
                                eachOldElement.remove();
                                const removed = eachNode.$removed;
                                if (removed) removed(eachOldElement);
                            }
                            const attr = eachNode.attr;
                            if (attr) {
                                element.attr(attr);
                            }
                            const css = eachNode.$css;
                            if (css) {
                                element.css(css);
                            }
                            if (eachNode.$html !== undefined) {
                                element.innerHTML = eachNode.$html;
                                if (eachOldNode) eachOldNode.children = [];
                            } else if (eachNode.$text !== undefined) {
                                element.textContent = eachNode.$text;
                            }
                            if (eachNode.children) {
                                renderNodes(eachNode.children, [], element);
                            }

                            const created = eachNode.$created;
                            if (created) created(element, eachNode);
                            const updated = eachNode.$updated;
                            if (updated) updated(element, eachNode);

                            if (i === 0) {
                                parent.appendChild(element);
                            } else {
                                const existedNode =
                                    eachNodes
                                        .slice(0, i)
                                        .reverse()
                                        .find((nearNode) => {
                                            const eachHasIf = nearNode.hasOwnProperty('$if');
                                            return (eachHasIf && nearNode.$if || !eachHasIf)
                                                && nearNode.element;
                                        });

                                if (existedNode) {
                                    existedNode.element.after(element);
                                } else {
                                    parent.appendChild(element);
                                }
                            }
                        }
                    }
                }
            })(this.nodes, oldNodes, container);
        } else {
            this.container = container;
            (function create(eachNodes, parent) {
                const eachFragment = fragment.cloneNode();
                eachNodes.forEach((eachNode) => {
                    const hasIf = eachNode.hasOwnProperty('$if');
                    if (hasIf && !eachNode.$if) return;
                    let element;
                    if (eachNode.$namespace) {
                        element = document.createElementNS(eachNode.$namespace, eachNode.tag);
                    } else {
                        element = document.createElement(eachNode.tag);
                    }
                    eachNode.element = element;
                    const created = eachNode.$created;
                    if (created) created(element, eachNode);
                    const updated = eachNode.$updated;
                    if (updated) updated(element, eachNode);
                    if (eachNode.$html !== undefined) {
                        element.innerHTML = eachNode.$html;
                    } else if (eachNode.$text !== undefined) {
                        element.textContent = eachNode.$text;
                    }
                    const attr = eachNode.attr;
                    if (attr) {
                        element.attr(attr);
                    }
                    const css = eachNode.$css;
                    if (css) {
                        element.css(css);
                    }
                    if (eachNode.children) {
                        create(eachNode.children, element);
                    }
                    eachFragment.appendChild(element);
                });
                parent.appendChild(eachFragment);
            })(this.nodes, container);
        }
    }

    remove() {
        if (this.nodes.length) {
            this.container = null;
            (function remove(eachNodes, isRoot?: boolean) {
                eachNodes
                    .forEach((eachNode) => {
                        const element = eachNode.element;
                        if (element) {
                            // 父層被移除，後代也將一併被移除，無須再執行後代的 .remove()
                            if (isRoot) element.remove();
                            const removed = eachNode.$removed;
                            if (removed) removed(element, eachNode);
                        }
                        if (eachNode.children) {
                            remove(eachNode.children);
                        }
                    });
            })(this.nodes, true);
            this.nodes = [];
        }
        return this;
    }
}
