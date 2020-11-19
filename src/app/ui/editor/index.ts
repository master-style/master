import { Element, Attr, Prop } from '../../element';
import css from './editor.scss';

const NAME = 'editor';

@Element({
    tag: 'm-' + NAME,
    css
})
export class EditorElement extends HTMLElement {

    template = window['Master'](() => [
        'slot'
    ]);

    @Attr()
    disabled: boolean;

    @Prop({
        render: false,
        update(editor: EditorElement, value: any, oldValue: any) {

        }
    })
    value: any;

    onConnected() {

    }

    onDisconnected() {

    }

}
