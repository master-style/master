import { Element } from '@element';

import css from './index.scss';

const NAME = 'header';

@Element({
    tag: 'm-' + NAME,
    css
})
export class HeaderElement extends HTMLElement {

    // todo:
    // - 用 min 來計算 safe-area-inset-top 與 scroll-top

    template: MasterTemplate = $(() => [
        'div', { part: 'root' }, [
            'slot', { name: 'start' },
            'slot',
            'slot', { name: 'end' }
        ]
    ]);

    onConnected() {
        const parent: any = this.parentElement;
        if (parent.tagName === 'M-MODAL') {
            parent.header = this;
        }
    }

    render() {
        this.template.render(this.shadowRoot);
    }
}
