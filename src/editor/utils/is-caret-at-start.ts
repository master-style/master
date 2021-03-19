import getDeepestNode from './get-deepest-node';
import isLineBreakTag from './is-line-break-tag';
import isEmptyNode from './is-empty-node';

const selection = window.getSelection();

/**
 * Get's deepest first node and checks if offset is zero
 *
 * @returns {boolean}
 */
export default function isCaretAtStart(): boolean {
    const firstNode = getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
    let focusNode = selection.focusNode;

    /** Case when selection have been cleared programmatically, for example after CBS */
    if (!selection.anchorNode) {
        return false;
    }

    /**
     * Workaround case when caret in the text like " |Hello!"
     * selection.anchorOffset is 1, but real caret visible position is 0
     *
     * @type {number}
     */

    let firstLetterPosition = focusNode.textContent.search(/\S/);

    if (firstLetterPosition === -1) { // empty text
        firstLetterPosition = 0;
    }

    /**
     * If caret was set by external code, it might be set to text node wrapper.
     * <div>|hello</div> <---- Selection references to <div> instead of text node
     *
     * In this case, anchor node has ELEMENT_NODE node type.
     * Anchor offset shows amount of children between start of the element and caret position.
     *
     * So we use child with focusOffset index as new anchorNode.
     */
    let focusOffset = selection.focusOffset;

    if (focusNode.nodeType !== Node.TEXT_NODE && focusNode.childNodes.length) {
        if (focusNode.childNodes[focusOffset]) {
            focusNode = focusNode.childNodes[focusOffset];
            focusOffset = 0;
        } else {
            focusNode = focusNode.childNodes[focusOffset - 1];
            focusOffset = focusNode.textContent.length;
        }
    }

    /**
     * In case of
     * <div contenteditable>
     *     <p><b></b></p>   <-- first (and deepest) node is <b></b>
     *     |adaddad         <-- focus node
     * </div>
     */
    if (isLineBreakTag(firstNode as HTMLElement) || isEmptyNode(firstNode)) {
        const leftSiblings = this.getHigherLevelSiblings(focusNode as HTMLElement, 'left');
        const nothingAtLeft = leftSiblings.every((node) => {
            /**
             * Workaround case when block starts with several <br>'s (created by SHIFT+ENTER)
             *
             * @see https://github.com/codex-team/editor.js/issues/726
             * We need to allow to delete such linebreaks, so in this case caret IS NOT AT START
             */
            const regularLineBreak = isLineBreakTag(node);
            /**
             * Workaround SHIFT+ENTER in Safari, that creates <div><br></div> instead of <br>
             */
            const lineBreakInSafari = node.children.length === 1 && isLineBreakTag(node.children[0] as HTMLElement);
            const isLineBreak = regularLineBreak || lineBreakInSafari;

            return isEmptyNode(node) && !isLineBreak;
        });

        if (nothingAtLeft && focusOffset === firstLetterPosition) {
            return true;
        }
    }

    /**
     * We use <= comparison for case:
     * "| Hello"  <--- selection.anchorOffset is 0, but firstLetterPosition is 1
     */
    return firstNode === null || (focusNode === firstNode && focusOffset <= firstLetterPosition);
}