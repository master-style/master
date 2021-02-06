import { Element } from '../../../element';
import Template from '@master/template';

import css from './footer.scss';

const NAME = 'footer';

@Element({
    tag: 'm-' + NAME,
    css
})
export class FooterElement extends HTMLElement {

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
