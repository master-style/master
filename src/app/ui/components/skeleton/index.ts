import { Element, Attr } from '../../../element';
import css from './skeleton.scss';

const NAME = 'skeleton';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonElement extends HTMLElement {

    template = window['Master'](() => {
        this.css('width', this.width);
        return [
            'div', {
                part: 'bg', $css: {
                    height: this.height
                }
            }
        ];
    });

    @Attr()
    width: number;

    @Attr()
    height: number;

    render() {
        this.template.render(this.shadowRoot);
    }
}
