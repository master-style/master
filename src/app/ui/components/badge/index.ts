import { Element, MasterElement } from '@master/element';
import css from './badge.scss';
import Template from '@master/template';

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
