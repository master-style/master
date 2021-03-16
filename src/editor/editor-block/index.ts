import { Element, MasterElement, Attr, Prop } from '@master/element';
import { Template } from '@master/template';
import { EditorElement, EditorBlockValue, EditorBlockOptions } from '..';

import css from './editor-block.scss';

const NAME = 'editor';

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
                    console.log(this.value);
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
    }

    onDisconnected() {
        this.editor.blocks.splice(this.editor.blocks.indexOf(this), 1);
    }

    render() {
        this.template.render(this.shadowRoot);
        this.contentTemplate.render(this);
    }
}