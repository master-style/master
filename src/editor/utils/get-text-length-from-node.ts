/**
 * Return length of node`s text content
 *
 * @param {Node} node - node with content
 *
 * @returns {number}
 */
export default function getTextLengthFromNode(node: Node): number {
    if (node.nodeType === Node.TEXT_NODE) {
        return (node as Text).length;
    }
    return node.textContent.length;
}