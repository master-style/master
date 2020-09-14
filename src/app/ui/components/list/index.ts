import { Element } from '@element';
import css from './index.scss';

const NAME = 'list';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterList extends HTMLElement {
    template = $(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
