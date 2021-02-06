import { Element } from '../../../element';
import css from './badge.scss';
import Template from '@master/template';

const NAME = 'badge';

@Element({
    tag: 'm-' + NAME,
    css
})
export class BadgeElement extends HTMLElement {
    template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
