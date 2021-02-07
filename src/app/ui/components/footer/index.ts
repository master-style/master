import { Element, MasterElement } from '@master/element';
import Template from '@master/template';

import css from './footer.scss';

const NAME = 'footer';

@Element('m-' + NAME)
export class FooterElement extends MasterElement {
    static css = css;

    template: Template = new Template(() => [
        'div', { part: 'root' }, [
            'slot', { name: 'start' },
            'slot',
            'slot', { name: 'end' }
        ]
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
