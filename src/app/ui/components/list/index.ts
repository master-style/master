import { Element, MasterElement } from '@master/element';
import Template from '@master/template';
import css from './list.scss';

const NAME = 'list';


@Element('m-' + NAME)
export class ListElement extends MasterElement {
    static css = css;
    
    template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
