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

    onConnected() {
        const editor = (this.parentElement as EditorElement);
        editor.blocks.push(this);
    }

    onDisconnected() {
        const editor = (this.parentElement as EditorElement);
        editor.blocks.splice(editor.blocks.indexOf(this), 1);
    }

    render() {
        this.template.render(this.shadowRoot);
    }
}