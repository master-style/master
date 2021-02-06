import { Element, MasterElement } from '@master/element';
import Template from '@master/template';
import css from './list.scss';

const NAME = 'list';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ListElement extends MasterElement {
    template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
