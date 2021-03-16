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
            $html: this.value.data,
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

    @Prop({ render: false })
    value: EditorBlockValue;

    @Prop({ render: false })
    options: EditorBlockOptions;

    @Prop()
    placeholder: string;

    editor: EditorElement;

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