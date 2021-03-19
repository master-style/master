import getDeepestNode from './get-deepest-node';
import isLineBreakTag from './is-line-break-tag';
import isEmpty from './is-empty';
import getHigherLevelSiblings from './get-higher-level-siblings';

const selection = window.getSelection();

/**
 * Get's deepest last node and checks if offset is last node text length
 *
 * @returns {boolean}
 */
export default function isCaretAtEnd(editableElement: HTMLElement): boolean {
    let focusNode = selection.focusNode;

    const lastNode = getDeepestNode(editableElement, true);

    /** Case when selection have been cleared programmatically, for example after CBS */
    if (!selection.focusNode) {
        return false;
    }

    /**
     * If caret was set by external code, it might be set to text node wrapper.
     * <div>hello|</div> <---- Selection references to <div> instead of text node
     *
     * In this case, anchor node has ELEMENT_NODE node type.
     * Anchor offset shows amount of children between start of the element and caret position.
     *
     * So we use child with anchofocusOffset - 1 as new focusNode.
     */
    let focusOffset = selection.focusOffset;

    if (focusNode.nodeType !== Node.TEXT_NODE && focusNode.childNodes.length) {
        if (focusNode.childNodes[focusOffset - 1]) {
            focusNode = focusNode.childNodes[focusOffset - 1];
            focusOffset = focusNode.textContent.length;
        } else {
            focusNode = focusNode.childNodes[0];
            focusOffset = 0;
        }
    }

    /**
     * In case of
     * <div contenteditable>
     *     adaddad|         <-- anchor node
     *     <p><b></b></p>   <-- first (and deepest) node is <b></b>
     * </div>
     */
    if (isLineBreakTag(lastNode as HTMLElement) || isEmpty(lastNode)) {
        const rightSiblings = getHigherLevelSiblings(focusNode as HTMLElement, 'right');
        const nothingAtRight = rightSiblings.every((node, i) => {
            /**
             * If last right sibling is BR isEmpty returns false, but there actually nothing at right
             */
            const isLastBR = i === rightSiblings.length - 1 && isLineBreakTag(node as HTMLElement);

            return isLastBR || (isEmpty(node) && !isLineBreakTag(node));
        });

        if (nothingAtRight && focusOffset === focusNode.textContent.length) {
            return true;
        }
    }

    /**
     * Workaround case:
     * hello |     <--- anchorOffset will be 5, but textContent.length will be 6.
     * Why not regular .trim():
     *  in case of ' hello |' trim() will also remove space at the beginning, so length will be lower than anchorOffset
     */
    const rightTrimmedText = lastNode.textContent.replace(/\s+$/, '');

    /**
     * We use >= comparison for case:
     * "Hello |"  <--- selection.anchorOffset is 7, but rightTrimmedText is 6
     */
    return focusNode === lastNode && focusOffset >= rightTrimmedText.length;
}