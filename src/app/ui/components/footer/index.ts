import { Element } from '../../../element';

import css from './footer.scss';

const NAME = 'footer';

@Element({
    tag: 'm-' + NAME,
    css
})
export class FooterElement extends HTMLElement {

    template: Template = window['Master'](() => [
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
