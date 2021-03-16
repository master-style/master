import { Element, MasterElement, Attr, Prop } from '@master/element';
import { Template } from '@master/template';
import { EditorElement } from '..';

import css from './editor-block.scss';

const NAME = 'editor';

@Element('m-' + NAME + '-block')
export class EditorBlockElement extends MasterElement {

    static css = css;

    template = new Template(() => [
        'slot'
    ]);

    @Prop({ render: false })
    value: any;

    @Attr()
    type: string;

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
    }
}