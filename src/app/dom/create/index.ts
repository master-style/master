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

    container;
    nodes: TemplateNode[] = [];

    render(container) {

        // tslint:disable-next-line: prefer-for-of
        const oldNodes: TemplateNode[] = this.nodes;
        this.nodes = [];

        (function generate(tokens: any[], eachNodes: TemplateNode[]) {
            let node: TemplateNode;
            for (const token of tokens) {
                const tokenType = typeof token;
                if (tokenType === 'string') {
                    node = { tag: token };
                    eachNodes.push(node);
                } else if (Array.isArray(token)) {
                    generate(token, node.children = []);
                } else if (tokenType === 'function') {
                    const children = token().reduce((acc, eachToken) => {
                        return acc.concat(eachToken);
                    }, []);
                    generate(children, node.children = []);
                } else if (tokenType === 'object') {
                    const attr = token;
                    node.attr = {};
                    for (const attrKey in attr) {
                        const eachAttrValue = attr[attrKey];
                        if (attrKey[0] !== '$') {
                            node.attr[attrKey] = eachAttrValue;
                        } else {
                            node[attrKey] = eachAttrValue;
                        }
                    }
                }
            }
        })(this.template(), this.nodes);

        if (this.nodes && this.container === container) {
            (function renderNodes(eachNodes, eachOldNodes, parent) {
                if (!eachNodes.length && eachOldNodes.length) {
                    eachOldNodes
                        .forEach((eachNode) => eachNode.element.remove());
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < eachNodes.length; i++) {
                        const eachNode = eachNodes[i];
                        let eachOldNode = eachOldNodes[i];
                        let skipChildren = false;
                        console.log(eachOldNode);
                        const cached = eachOldNode && eachNode.tag === eachOldNode.tag;
                        if (cached) {
                            eachNode.element = eachOldNode.element;
                            if (eachNode.attr) {
                                for (const eachAttrKey in eachNode.attr) {
                                    const newAttrValue = eachNode.attr[eachAttrKey];
                                    const oldAttrValue = eachOldNode?.attr[eachAttrKey];
                                    if (newAttrValue !== oldAttrValue) {
                                        eachNode.element.attr(eachAttrKey, newAttrValue);
                                    }
                                }
                            }
                            if (!eachNodes[i + 1]) {
                                eachOldNodes.splice(i + 1)
                                    .forEach((deletedOldNode) => deletedOldNode.element.remove());
                            }
                        } else {
                            eachNode.element = document.createElement(eachNode.tag);
                            if (eachOldNode) {
                                eachOldNode.element.before(eachNode.element);
                                eachOldNode = (eachOldNode.element.remove() as undefined);
                            }
                            if (eachNode.attr) {
                                eachNode.element.attr(eachNode.attr);
                            }
                        }
                        if (eachNode.$html !== undefined) {
                            eachNode.element.innerHTML = eachNode.$html;
                            skipChildren = true;
                        } else if (eachNode.$text !== undefined) {
                            eachNode.element.textContent = eachNode.$text;
                        }
                        if (!skipChildren && eachNode.children) {
                            renderNodes(eachNode.children, eachOldNode?.children, eachNode.element);
                        }
                        if (!cached) {
                            // 逐一插入首次創建新元素
                            if (i !== 0) {
                                eachNodes[i - 1].element.after(eachNode.element);
                            } else {
                                parent.appendChild(eachNode.element);
                            }
                        }
                    }
                }
            })(this.nodes, oldNodes, container);
        } else {
            this.container = container;
            (function create(eachNodes, parent) {
                const eachFragment = fragment.cloneNode();
                eachNodes.forEach((node) => {
                    const element = document.createElement(node.tag);
                    node.element = element;
                    const attr = node.attr;
                    let skipChildren = false;
                    if (node.$html !== undefined) {
                        element.innerHTML = node.$html;
                        skipChildren = true;
                    } else if (node.$text !== undefined) {
                        element.textContent = node.$text;
                    }
                    if (attr) {
                        element.attr(attr);
                    }
                    if (!skipChildren && node.children) {
                        create(node.children, element);
                    }
                    eachFragment.appendChild(element);
                });
                parent.appendChild(eachFragment);
            })(this.nodes, container);
        }
    }

    remove() {
        if (this.nodes) {
            this.container = null;
            this.nodes
                .forEach((eachNode) => eachNode.element.remove());
            this.nodes = [];
        }
        return this;
    }
}
