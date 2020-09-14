import { Element } from '@element';
import css from './index.scss';

const NAME = 'content';

const
    $window = window,
    hasTouch = 'ontouchstart' in $window,
    DIV = 'div',
    WIDTH_KEY = 'Width',
    HEIGHT_KEY = 'Height',
    SCROLL_SIZE_KEY = { x: 'scrollWidth', y: 'scrollHeight' },
    SCROLL_POSITION_KEY = { x: 'scrollLeft', y: 'scrollTop' },
    OFFSET_POSITION_KEY = { x: 'offsetLeft', y: 'offsetTop' },
    OFFSET_SIZE_KEY = { x: 'offset' + WIDTH_KEY, y: 'offset' + HEIGHT_KEY },
    CLIENT_SIZE_KEY = { x: 'client' + WIDTH_KEY, y: 'client' + HEIGHT_KEY },
    linear = (t, b, c, d): any => {
        t = (t /= d) * .5;
        return Math.round(b + c * t);
    };

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterList extends HTMLElement {
    template = $(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
