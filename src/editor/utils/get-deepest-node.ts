import isSingleTag from './is-single-tag';
import isLineBreakTag from './is-line-break-tag';

export default function getDeepestNode(node: Node, placement: 'first' | 'last'): Node {
    /**
     * Current function have two directions:
     *  - starts from first child and every time gets first or nextSibling in special cases
     *  - starts from last child and gets last or previousSibling
     *
     * @type {string}
     */
    const child = placement === 'last' ? 'lastChild' : 'firstChild',
        sibling = placement === 'last' ? 'previousSibling' : 'nextSibling';

    if (node && node.nodeType === Node.ELEMENT_NODE && node[child]) {
        let nodeChild = node[child] as Node;

        /**
         * special case when child is single tag that can't contain any content
         */
        if (
            isSingleTag(nodeChild as HTMLElement) &&
            isLineBreakTag(nodeChild as HTMLElement)
        ) {
            /**
             * 1) We need to check the next sibling. If it is Node Element then continue searching for deepest
             * from sibling
             *
             * 2) If single tag's next sibling is null, then go back to parent and check his sibling
             * In case of Node Element continue searching
             *
             * 3) If none of conditions above happened return parent Node Element
             */
            if (nodeChild[sibling]) {
                nodeChild = nodeChild[sibling];
            } else if (nodeChild.parentNode[sibling]) {
                nodeChild = nodeChild.parentNode[sibling];
            } else {
                return nodeChild.parentNode;
            }
        }

        return getDeepestNode(nodeChild, placement);
    }

    return node;
}
