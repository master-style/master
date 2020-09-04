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
        private template
    ) { }

    container: HTMLElement;
    nodes: TemplateNode[] = [];

    render(container) {

        // tslint:disable-next-line: prefer-for-of
        const nodes: TemplateNode[] = [];

        (function generate(layer: any[], trees: TemplateNode[]) {
            let node: TemplateNode;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < layer.length; i++) {
                const current = layer[i];
                const currentType = typeof current;
                if (currentType === 'string') {
                    node = {
                        tag: current
                    };
                    trees.push(node);
                } else if (Array.isArray(current)) {
                    generate(current, node.children = []);
                } else if (currentType === 'function') {
                    node.children = [];
                    const children = current().reduce((acc, currentValue) => {
                        return acc.concat(currentValue);
                    }, []);
                    generate(children, node.children = []);
                } else if (currentType === 'object') {
                    const attr = current;
                    if (attr.$text !== undefined) {
                        node.$text = attr.$text;
                        delete attr.$text;
                    }
                    if (attr.$html !== undefined) {
                        node.$html = attr.$html;
                        delete attr.$html;
                    }
                    node.attr = attr;
                }
            }
        })(this.template(), nodes);

        if (this.nodes && this.container === container) {
            (function renderNode(newNodes, oldNodes, parent) {
                if (!newNodes.length && oldNodes.length) {
                    oldNodes
                        .forEach((deletedOldNode) => deletedOldNode.element.remove());
                } else {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < newNodes.length; i++) {
                        const node = newNodes[i];
                        let oldNode = oldNodes ? oldNodes[i] : null;
                        if (oldNode && node.tag === oldNode.tag) {
                            node.element = oldNode.element;
                            if (node.attr) {
                                Object.keys(node.attr).forEach((eachAttrKey) => {
                                    const newAttrValue = node.attr[eachAttrKey];
                                    const oldAttrValue = oldNode?.attr[eachAttrKey];
                                    if (newAttrValue !== oldAttrValue) {
                                        node.element.attr(eachAttrKey, newAttrValue);
                                    }
                                });
                            }
                            if (node.$text && node.$text !== oldNode.$text) {
                                node.element.textContent = node.$text;
                            }
                            if (!newNodes[i + 1]) {
                                oldNodes.splice(i + 1)
                                    .forEach((deletedOldNode) => deletedOldNode.element.remove());
                            }
                            if (node.children) {
                                renderNode(node.children, oldNode.children, node.element);
                            }
                        } else {
                            node.element = document.createElement(node.tag);
                            if (oldNode && node.tag !== oldNode.tag) {
                                oldNode.element.before(node.element);
                                oldNode.element.remove();
                                oldNode = null;
                            }
                            if (node.attr) {
                                Object.keys(node.attr).forEach((eachAttrKey) => {
                                    const newAttrValue = node.attr[eachAttrKey];
                                    node.element.attr(eachAttrKey, newAttrValue);
                                });
                            }
                            if (node.$text) {
                                node.element.textContent = node.$text;
                            }
                            if (node.children) {
                                renderNode(node.children, oldNode?.children, node.element);
                            }
                            if (newNodes[i - 1]) {
                                newNodes[i - 1].element.after(node.element);
                            } else {
                                parent.append(node.element);
                            }
                        }
                    }
                }
            })(nodes, this.nodes, container);
        } else {
            this.container = container;
            create(nodes, container);
        }

        this.nodes = nodes;
    }

    remove() {
        if (this.nodes) {
            this.nodes
                .forEach((deletedNode) => deletedNode.element.remove());
            this.nodes = [];
        }
        return this;
    }
}
