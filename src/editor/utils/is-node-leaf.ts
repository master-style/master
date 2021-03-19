/**
 * checks node if it is doesn't have any child nodes
 *
 * @param {Node} node - node to check
 *
 * @returns {boolean}
 */
export default function isNodeLeaf(node: Node): boolean {
    if (!node) {
        return false;
    }

    return node.childNodes.length === 0;
}
