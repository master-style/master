import { Element, MasterElement } from '@master/element';
import { Template } from '@master/template';

import css from './header.scss';

const NAME = 'header';


@Element('m-' + NAME)
export class HeaderElement extends MasterElement {
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
