
window.Master = function (selector: string, attr?: { [key: string]: any }, ...children: (Element | string)[]) {
    if (attr) {
        const element: Element = document.createElement(selector, attr && attr.is ? { is: attr.is } : undefined);
        if (Object.keys(attr).length) element.attr(attr);
        if (children.length) {
            if (children.length > 1) {
                const fragment = document.createDocumentFragment();
                for (const eachChild of children) {
                    fragment.appendChild(
                        typeof eachChild === 'string' ?
                            document.createTextNode(eachChild as any) :
                            eachChild
                    );
                }
                element.appendChild(fragment);
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



interface cache {
    tag: string,
    attr?: { [key: string]: any },
    children?: cache[],
    element?: Element,
    $html?: string,
    $text?: string
};

const fragment = document.createDocumentFragment();

const create = function(eachNodes, container) {
    const eachFragment = fragment.cloneNode();
    eachNodes.forEach((node) => {
        const element = document.createElement(node.tag);
        node.element = element;
        const attr = node.attr;
        let skipChildren = false;
        if (node.$text !== undefined) {
            element.textContent = node.$text;
        }
        if (
            attr.$html !== undefined
        ) {
            element.innerHTML = node.$html;
            skipChildren = true;
        }
        if (attr) {
            Object.keys(attr).forEach((eachAttrKey) => {
                element.setAttribute(eachAttrKey, attr[eachAttrKey]);
            });
        }
        if (!skipChildren && node.children) {
            create(node.children, element);
        }
        eachFragment.appendChild(element);
    });
    container.appendChild(eachFragment);
};

Master.Render = class MasterRender {

    root;

    run(createTemplate, root) {
        // tslint:disable-next-line: prefer-for-of
        const nodes: cache[] = [];

        (function generate(layer: any[], trees: cache[]) {
            let node: cache;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < layer.length; i++) {
                const current = layer[i];
                if (typeof current === 'string') {
                    node = {
                        tag: current
                    };
                    trees.push(node);
                } else if (Array.isArray(current)) {
                    node.children = [];
                    generate(current, node.children);
                } else if (typeof current === 'object') {
                    const attr = current;
                    if (attr.$text !== undefined) {
                        node.$text = attr.$text;
                        delete attr.$text;
                    }
                    if (
                        attr.$html !== undefined
                    ) {
                        node.$html = attr.$html;
                        delete attr.$html;
                    }
                    node.attr = attr;
                }
            }
        })(createTemplate(), nodes);

        if (this.nodes && this.root === root) {
            (function render(newNodes, oldNodes) {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < newNodes.length; i++) {
                    const newNode = newNodes[i];
                    const oldNode = oldNodes[i];
                    newNode.element = oldNode.element;
                    if (newNode.attr) {
                        Object.keys(newNode.attr).forEach((eachAttrKey) => {
                            const newAttrValue = newNode.attr[eachAttrKey];
                            const oldAttrValue = oldNode.attr[eachAttrKey];
                            if (newAttrValue !== oldAttrValue)
                                newNode.element.setAttribute(eachAttrKey, newAttrValue);
                        });
                    }
                    if (newNode.$text && newNode.$text !== oldNode.$text) {
                        newNode.element.textContent = newNode.$text;
                    }
                    if (newNode.children) {
                        render(newNode.children, oldNode.children);
                    }
                }
            })(nodes, this.nodes);
        } else {
            this.root = root;
            create(nodes, root);
        }

        this.nodes = nodes;
    }

    nodes = [];
};