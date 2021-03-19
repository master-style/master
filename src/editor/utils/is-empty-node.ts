/**
 * breadth-first search (BFS)
 * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
 *
 * @description Pushes to stack all DOM leafs and checks for emptiness
 *
 * @param {Node} node - node to check
 * @returns {boolean}
 */
export default function isEmptyNode(node: Node): boolean {
    /**
     * Normalize node to merge several text nodes to one to reduce tree walker iterations
     */
    node.normalize();

    const treeWalker = [node];

    while (treeWalker.length > 0) {
        node = treeWalker.shift();

        if (!node) {
            continue;
        }

        if (this.isLeaf(node) && !this.isNodeEmpty(node)) {
            return false;
        }

        if (node.childNodes) {
            treeWalker.push(...Array.from(node.childNodes));
        }
    }

    return true;
}