import isSingleTag from './is-single-tag';
import isLineBreakTag from './is-line-break-tag';

/**
 * Checks node if it is empty
 *
 * @description Method checks simple Node without any childs for emptiness
 * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
 *
 * @param {Node} node - node to check
 *
 * @returns {boolean} true if it is empty
 */
export default function isNodeEmpty(node: Node): boolean {
    let nodeText;

    if (isSingleTag(node as HTMLElement) && !isLineBreakTag(node as HTMLElement)) {
        return false;
    }

    nodeText = node.textContent.replace('\u200B', '');

    return nodeText.trim().length === 0;
}