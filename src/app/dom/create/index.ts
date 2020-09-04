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

// const template = Master.template('div', { class: 'blue', name: 'aron' }, [])
// const render = Master.render(template);
// 第一次 render 後，將 template 存在 render 本身
// 第Ｎ次 render，都將與前一次 render 之 template 比對，一有異動便局部更新：
// - 局部更新 attr 異動
// - 局部更新 text 異動
// - 局部更新 node 異動 ( tagName /  )

interface TemplateNode {
    tag: string;
    attr?: { [key: string]: any };
    children?: TemplateNode[];
    element?: Element;
    $html?: string;
    $text?: string;
};

const create = function (eachNodes, parent) {
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
            Object.keys(attr).forEach((eachAttrKey) => {
                const eachAttrValue = attr[eachAttrKey];
                element.attr(eachAttrKey, eachAttrValue);
            });
        }
        if (!skipChildren && node.children) {
            create(node.children, element);
        }
        eachFragment.appendChild(element);
    });
    parent.appendChild(eachFragment);
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
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < tokens.length; i++) {
                const token = tokens[i];
                const tokenType = typeof token;
                if (tokenType === 'string') {
                    node = {
                        tag: token
                    };
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
            (function renderNode(eachNodes, eachOldNodes, parent) {
                if (!eachNodes.length && eachOldNodes.length) {
                    eachOldNodes
                        .forEach((eachNode) => eachNode.element.remove());
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < eachNodes.length; i++) {
                        const eachNode = eachNodes[i];
                        let eachOldNode = eachOldNodes ? eachOldNodes[i] : null;
                        if (eachOldNode && eachNode.tag === eachOldNode.tag) {
                            eachNode.element = eachOldNode.element;
                            if (eachNode.attr) {
                                Object.keys(eachNode.attr).forEach((eachAttrKey) => {
                                    const newAttrValue = eachNode.attr[eachAttrKey];
                                    const oldAttrValue = eachOldNode?.attr[eachAttrKey];
                                    if (newAttrValue !== oldAttrValue) {
                                        eachNode.element.attr(eachAttrKey, newAttrValue);
                                    }
                                });
                            }
                            if (eachNode.$text && eachNode.$text !== eachOldNode.$text) {
                                eachNode.element.textContent = eachNode.$text;
                            }
                            if (!eachNodes[i + 1]) {
                                eachOldNodes.splice(i + 1)
                                    .forEach((deletedOldNode) => deletedOldNode.element.remove());
                            }
                            if (eachNode.children) {
                                renderNode(eachNode.children, eachOldNode.children, eachNode.element);
                            }
                        } else {
                            eachNode.element = document.createElement(eachNode.tag);
                            if (eachOldNode && eachNode.tag !== eachOldNode.tag) {
                                eachOldNode.element.before(eachNode.element);
                                eachOldNode.element.remove();
                                eachOldNode = null;
                            }
                            if (eachNode.attr) {
                                Object.keys(eachNode.attr).forEach((eachAttrKey) => {
                                    const newAttrValue = eachNode.attr[eachAttrKey];
                                    eachNode.element.attr(eachAttrKey, newAttrValue);
                                });
                            }
                            if (eachNode.$text) {
                                eachNode.element.textContent = eachNode.$text;
                            }
                            if (eachNode.children) {
                                renderNode(eachNode.children, eachOldNode?.children, eachNode.element);
                            }
                            if (eachNodes[i - 1]) {
                                eachNodes[i - 1].element.after(eachNode.element);
                            } else {
                                parent.append(eachNode.element);
                            }
                        }
                    }
                }
            })(this.nodes, oldNodes, container);
        } else {
            this.container = container;
            create(this.nodes, container);
        }
    }

    remove() {
        if (this.nodes) {
            this.nodes
                .forEach((eachNode) => eachNode.element.remove());
            this.nodes = [];
        }
        return this;
    }
}
