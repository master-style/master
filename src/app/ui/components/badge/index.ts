import { Element, MasterElement } from '@master/element';
import Template from '@master/template';
import css from './badge.scss';

const NAME = 'badge';

@Element({
    tag: 'm-' + NAME,
    css
})
export class BadgeElement extends MasterElement {
    template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
