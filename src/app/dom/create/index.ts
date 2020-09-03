
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


const template = () => [
    'div', { class: 'test', $text: '1' }, [
        'div', {
            class: 'blue',
            $text: '2'
        },
        'div', { $text: '2' },
        'div', { $text: '2' },
        'div', { $text: '2' }, [
            'div', { $text: '3' },
            'div', { $text: '3' }, [
                'div', { $text: '4' }, [
                    'div', { $text: '5' }
                ]
            ]
        ],
        'div', { $text: '2', $html: '<div style="width: 100px; height: 50px; background-color: red"></div>' }
    ],
    'div', { $text: '1' },
    'div', { $text: '1' },
    'div', { $text: '1' }, [
        'div', { $text: '2' },
    ],
    'div', { $text: '1' }
];

interface cache {
    tag: string,
    attr?: { [key: string]: any },
    children?: cache[],
    element?: Element
};

Master.Render = class MasterRender {
    run(createTemplate) {
        // tslint:disable-next-line: prefer-for-of
        const nodes: cache[] = [];
        (function generate(layer: any[], trees: cache[]) {
            let element: cache;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < layer.length; i++) {
                const current = layer[i];
                if (typeof current === 'string') {
                    element = {
                        tag: current
                    };
                    trees.push(element);
                } else if (Array.isArray(current)) {
                    element.children = [];
                    generate(current, element.children);
                } else if (typeof current === 'object') {
                    element.attr = current;
                }
            }
        })(createTemplate(), nodes);

        const fragment = document.createDocumentFragment();
        (function render(eachNodes, container) {
            const eachFragment = fragment.cloneNode();
            eachNodes.forEach((eachNode) => {
                const element = document.createElement(eachNode.tag);
                eachNode.element = element;
                const attr = eachNode.attr;
                let skipChildren = false;
                if (attr) {
                    if (attr.$text) {
                        element.textContent = attr['$text'];
                        delete eachNode.attr.$text;
                    }
                    if (
                        attr.$html
                    ) {
                        element.innerHTML = attr.$html;
                        delete eachNode.attr.$html;
                        skipChildren = true;
                    }
                    element.attr(attr);
                }
                if (!skipChildren && eachNode.children) {
                    render(eachNode.children, element);
                }
                eachFragment.appendChild(element);
            });
            container.appendChild(eachFragment);
        })(nodes, document.documentElement);
    }
};

setTimeout(() => {

    document.documentElement.innerHTML = '';
}, 1000);
const render1 = new Master.Render();

setTimeout(() => {
    console.time('t1');
    render1.run(template);
    console.timeEnd('t1');
}, 3000);

// import { html, render } from 'lit-html';


// setTimeout(() => {
//     console.time('t1');
//     const result = myTemplate();
//     render(result, document.documentElement);
//     console.timeEnd('t1');
// }, 3000);

// let myTemplate = () => html`<div class="test">1<div name="fuck" class="blue">2</div><div>2</div><div>2</div><div>2<div>3</div><div>3<div>4<div>5</div></div></div></div><div>2</div></div><div>1</div><div>1</div><div>1<div>2</div></div><div>1</div>`;
