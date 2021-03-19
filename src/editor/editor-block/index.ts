import { Element, MasterElement, Attr, Prop } from '@master/element';
import { Template } from '@master/template';
import { EditorElement, EditorBlockValue, EditorBlockOptions } from '..';
import { getCaretIndex } from '../utils/get-caret-index';

import getDeepestNode from '../utils/get-deepest-node';
import isLineBreakTag from '../utils/is-line-break-tag';
import isEmpty from '../utils/is-empty';
import getHigherLevelSiblings from '../utils/get-higher-level-siblings';
import getTextLengthFromNode from '../utils/get-text-length-from-node';
import placeCaret from '../utils/place-caret';

import css from './editor-block.scss';

const NAME = 'editor';
const selection = window.getSelection();

export interface EditorCaretAnchor {
    node: Node;
    offset: number;
}

export declare type EditorCaretPlacement = 'last' | 'end';

@Element('m-' + NAME + '-block')
export class EditorBlockElement extends MasterElement {

    static css = css;

    template = new Template(() => [
        'slot'
    ]);

    contentTemplate = new Template(() => {
        const options: any = {
            placeholder: this.placeholder,
            contentEditable: this.options.editable,
            $html: this.data,
            $created: (element) => this.editableElement = this.options.editable ? element : undefined
        };
        if (this.options.editable) {
            options.$on = {
                input: (event) => {
                    this.value.data = event.target.innerHTML;
                }
            }
        }
        return [
            this.options.tag, options
        ]
    });

    @Prop()
    placeholder: string;

    set data(data) {
        this.value.data = data;
    }

    get data() {
        return this.value.data || '';
    }

    value: EditorBlockValue;
    options: EditorBlockOptions;
    editor: EditorElement;
    editableElement: HTMLElement;

    focus() {
        this.editableElement?.focus();
    }

    get caretPosition() {
        this.editableElement.focus();
        let selection = window.getSelection();
        let range = selection.getRangeAt(0);
        const childNodes = this.editableElement.childNodes;
        const lastChildNodeIndex = childNodes.length - 1;
        const lastChildNode = childNodes[lastChildNodeIndex];
        if (lastChildNode) {
            range.selectNodeContents(lastChildNode);
            return {
                offset: range.endOffset,
                index: lastChildNodeIndex
            };
        } else {
            return;
        }
    }

    set caretPosition(caretPosition: { offset: number, index: number }) {
        let selection = window.getSelection();
        let range = document.createRange();
        const lastChildNode = this.editableElement.childNodes[caretPosition.index];
        range.setStart(lastChildNode, caretPosition.offset);
        range.setEnd(lastChildNode, caretPosition.offset);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    onConnected() {
        this.editor = (this.parentElement as EditorElement);
        this.editor.blocks.push(this);
        this
            .on('keydown', (event: KeyboardEvent) => {
                console.log(this.isCaretAtStart, this.isCaretAtEnd)
                switch (event.key) {
                    case 'Backspace':
                        if (this.isCaretAtStart) {
                            const prevBlock = this.prevBlock;
                            if (prevBlock) {
                                event.preventDefault();
                                if (prevBlock.editable && this.data) {
                                    prevBlock.placeCaret('end');
                                    prevBlock.editableElement.append(...Array.from(this.editableElement.childNodes));
                                    prevBlock.data = prevBlock.editableElement.innerHTML;
                                }
                                this.editor.removeBlocks([this]);
                            }
                        }
                        break;
                }
            }, { id: [NAME] })
            .on('input', (event: InputEvent) => {
                console.log(event);
                switch (event.inputType) {
                    case 'insertParagraph':
                        const insertedDiv = this.getInsertDiv(selection.focusNode);
                        insertedDiv?.remove();
                        this.data = this.editableElement.innerHTML;
                        const nextBlock = this.editor.addBlock({
                            type: this.value.type,
                            data: insertedDiv?.innerHTML
                        }, this.index + 1);
                        nextBlock.focus();
                        break;
                }

            }, { id: [NAME], passive: true })
    }

    onDisconnected() {
        this.editor.blocks.splice(this.editor.blocks.indexOf(this), 1);
    }

    render() {
        this.template.render(this.shadowRoot);
        this.contentTemplate.render(this);
    }

    getInsertDiv(node: Element | Node) {
        const parentElement = node.parentElement;
        if (parentElement === this.editableElement) {
            return node
        } else {
            return this.getInsertDiv(parentElement);
        }
    }

    get editable() {
        return this.options.editable;
    }

    get prevBlock() {
        return this.editor.blocks[this.index - 1]
    }

    get nextBlock() {
        return this.editor.blocks[this.index + 1]
    }

    get type() {
        return this.value.type;
    }

    get index() {
        return this.editor.value.indexOf(this.value);
    }

    /**
     * Get's deepest first node and checks if offset is zero
     *
     * @returns {boolean}
     */
    get isCaretAtStart(): boolean {
        const firstNode = getDeepestNode(this.editableElement, 'first');
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
        if (isLineBreakTag(firstNode as HTMLElement) || isEmpty(firstNode)) {
            const leftSiblings = getHigherLevelSiblings(focusNode as HTMLElement, 'left');
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

                return isEmpty(node) && !isLineBreak;
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

    /**
     * Get's deepest last node and checks if offset is last node text length
     *
     * @returns {boolean}
     */
    get isCaretAtEnd(): boolean {
        let focusNode = selection.focusNode;

        const lastNode = getDeepestNode(this.editableElement, 'last');

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

    /**
     * Creates Document Range and sets caret to the element with offset
     *
     * @param {HTMLElement} element - target node.
     * @param {number} offset - offset
     */
    placeCaret(placement: EditorCaretPlacement) {
        this.focus();
        const anchor = this.getCaretAnchor(placement);
        placeCaret(anchor.node, anchor.offset);
        this.editableElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return this;
    }

    getCaretAnchor(placement: EditorCaretPlacement): EditorCaretAnchor {
        let offset = 0;
        let node: Node | Element = this.editableElement;
        if (placement === 'last') {
            node = getDeepestNode(this.editableElement, 'last');
            offset = getTextLengthFromNode(node);
        }
        return {
            node,
            offset
        }
    }
}