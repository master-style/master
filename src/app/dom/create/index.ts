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

const removeNode = (node) => {
    if (!node?.element) return;
    node.element.remove();
    const removed = node.$removed;
    if (removed) removed(node.element, node);
};

const removeNodes = (eachNodes, isRoot?: boolean) => {
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
                removeNodes(eachNode.children);
            }
        });
};

class MasterTemplate {

    constructor(
        private template: () => any[]
    ) { }

    container: any;
    nodes: TemplateNode[] = [];

    render(container) {

        if (!container) return;

        // tslint:disable-next-line: prefer-for-of
        const oldNodes: TemplateNode[] = this.nodes;
        this.nodes = [];

        (function generate(tokens: any[], eachNodes: TemplateNode[]) {
            let eachNode: TemplateNode;
            for (const token of tokens) {
                const tokenType = typeof token;
                if (tokenType === 'string') {
                    eachNode = {
                        tag: token,
                        children: null
                    };
                    eachNodes.push(eachNode);
                } else {
                    const hasIf = eachNode.hasOwnProperty('$if');
                    const whether = hasIf && eachNode.$if || !hasIf;
                    if (Array.isArray(token) && whether) {
                        if (!eachNode.children) eachNode.children = [];
                        generate(token, eachNode.children);
                    } else if (tokenType === 'function' && whether) {
                        const children = token().reduce((acc, eachToken) => {
                            return acc.concat(eachToken);
                        }, []);
                        if (!eachNode.children) eachNode.children = [];
                        generate(children, eachNode.children);
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

        if (this.nodes.length && this.container === container) {
            (function renderNodes(eachNodes, eachOldNodes, parent) {
                if (!eachNodes.length && eachOldNodes.length) {
                    removeNodes(eachOldNodes, true);
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    if (eachOldNodes && eachOldNodes[eachNodes.length]) {
                        eachOldNodes.splice(eachNodes.length)
                            .forEach((targetOldNode) => removeNode(targetOldNode));
                    }

                    for (let i = 0; i < eachNodes.length; i++) {
                        const eachNode = eachNodes[i];
                        let eachOldNode = eachOldNodes && eachOldNodes[i];
                        const existing = !!eachOldNode?.element;
                        const same = eachNode.tag === eachOldNode?.tag;
                        const hasIf = eachNode.hasOwnProperty('$if');
                        const whether = hasIf && eachNode.$if || !hasIf;

                        if (
                            // old: true ; now: false
                            existing && !whether ||
                            existing && whether && !same
                        ) {
                            removeNode(eachOldNode);
                            // 不要 remove 掉, 要保留陣列佔位供下一次快取判斷
                            eachOldNode = null;
                        }

                        if (!whether) continue;

                        if (existing && same) {
                            const element = eachNode.element = eachOldNode?.element;
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
                                if (eachOldNode) {
                                    eachOldNode.children = null;
                                };
                            } else if (
                                eachNode.$text !== undefined &&
                                eachNode.$text !== eachOldNode.$text
                            ) {
                                element.textContent = eachNode.$text;
                            }
                            if (eachNode.children) {
                                renderNodes(eachNode.children, eachOldNode?.children, element);
                            }
                            const updated = eachNode.$updated;
                            if (updated) updated(element, eachNode);
                        } else {
                            let element;
                            if (eachNode.$namespace) {
                                element = document.createElementNS(eachNode.$namespace, eachNode.tag);
                            } else {
                                element = document.createElement(eachNode.tag);
                            }
                            eachNode.element = element;
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
                                if (eachOldNode) {
                                    eachOldNode.children = null;
                                }
                            } else if (eachNode.$text !== undefined) {
                                element.textContent = eachNode.$text;
                            }
                            if (eachNode.children) {
                                renderNodes(eachNode.children, eachOldNode?.children, element);
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
                                    parent.prepend(element);
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
            removeNodes(this.nodes, true);
            this.nodes = [];
        }
        return this;
    }
}
