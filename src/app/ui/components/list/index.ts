import { Element } from '../../../element';
import css from './list.scss';

const NAME = 'list';

@Element({
    tag: 'm-' + NAME,
    css
})
export class ListElement extends HTMLElement {
    template = $(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
