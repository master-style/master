import { Element } from '../../../element';
import css from './list.scss';
import Template from '@master/template';

const NAME = 'list';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ListElement extends HTMLElement {
    template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
