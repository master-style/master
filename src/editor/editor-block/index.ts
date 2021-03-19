import { Element, MasterElement, Attr, Prop } from '@master/element';
import { Template } from '@master/template';
import { EditorElement, EditorBlockValue, EditorBlockOptions } from '..';
import { getCaretIndex } from '../utils/get-caret-index';

import css from './editor-block.scss';

const NAME = 'editor';
const selection = window.getSelection();

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
        if (this.editableElement) {
            this.editableElement.innerHTML = data;
        }
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
                const currentIndex = this.editor.blocks.indexOf(this);
                const nextIndex = currentIndex + 1;
                const prevIndex = currentIndex - 1;
                const prevBlock = prevIndex !== -1 ? this.editor.blocks[prevIndex] : undefined;
                const caretIndex = getCaretIndex(event.target);
                // switch (event.key) {
                //     case 'Backspace':
                //         if (caretIndex === 0) {
                //             event.preventDefault();
                //             if (prevBlock && prevBlock.options.editable) {
                //                 const caretPosition = prevBlock.caretPosition;
                //                 if (block.value.data) {
                //                     prevBlock.data = prevBlock.data + block.value.data;
                //                 }
                //                 if (caretPosition) {
                //                     prevBlock.caretPosition = caretPosition;
                //                 }
                //             }
                //             editor.removeBlocks([block]);
                //         }
                //         break;
                // }
            }, { id: [NAME] })
            .on('input', (event: InputEvent) => {
                console.log(event);
                switch (event.inputType) {
                    case 'insertParagraph':
                        const insertedDiv = this.getInsertDiv(selection.focusNode);
                        insertedDiv?.remove();
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

    get index() {
        return this.editor.value.indexOf(this.value);
    }
}