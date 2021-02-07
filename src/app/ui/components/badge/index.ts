import { Element, MasterElement } from '@master/element';
import Template from '@master/template';
import css from './badge.scss';

const NAME = 'badge';

@Element('m-' + NAME)
export class BadgeElement extends MasterElement {
    static css = css;

    template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
