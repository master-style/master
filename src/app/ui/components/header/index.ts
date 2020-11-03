import { Element } from '../../../element';

import css from './header.scss';

const NAME = 'header';

@Element({
    tag: 'm-' + NAME,
    css
})
export class HeaderElement extends HTMLElement {

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
