import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'icon';
const ICON = {
    caret: '<path d="M5.581,6.763a1.253,1.253,0,0,0,1.664,0L12.4,2.185A1.25,1.25,0,0,0,11.571,0H1.255A1.25,1.25,0,0,0,.423,2.185Z" transform="translate(5.674 8.243)"/>',
    menu: '<line class="l1" x1="3" y1="6" x2="21" y2="6"/><line class="l2" x1="3" y1="12" x2="21" y2="12"/><line class="l3" x1="3" y1="18" x2="21" y2="18"/>',
    close: '<line class="l1" x1="3" y1="6" x2="21" y2="6"/><line class="l3" x1="3" y1="18" x2="21" y2="18"/>',
    chevron: '<g><line class="l1" x1="2" y1="12" x2="12" y2="12"/><line class="l2" x1="22" y1="12" x2="12" y2="12"/>',
    unfold: '<path d="M4.847,5.874a1.089,1.089,0,0,0,1.445,0L10.772,1.9A1.086,1.086,0,0,0,10.049,0H1.09A1.086,1.086,0,0,0,.367,1.9Z" transform="translate(6.518 14.609)"/><path d="M4.847,5.874a1.089,1.089,0,0,0,1.445,0L10.772,1.9A1.086,1.086,0,0,0,10.049,0H1.09A1.086,1.086,0,0,0,.367,1.9Z" transform="translate(17.657 9.648) rotate(180)"/>'
};

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterIcon extends HTMLElement {

    template = $(() => {
        console.log(this.name);
        return [
            'div', { part: 'root' }, [
                'svg', { viewBox: '0 0 24 24', $namespace: 'http://www.w3.org/2000/svg', $html: ICON[this.name] }
            ]
        ]
    });

    @Attr()
    name: string;

    @Attr({ render: false })
    active: string;

    render() {
        this.template.render(this.shadowRoot);
    }

}