import { Element } from '../../../element';
import css from './badge.scss';

const NAME = 'badge';

@Element({
    tag: 'm-' + NAME,
    css
})
export class BadgeElement extends HTMLElement {
    template = window['Master'](() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
