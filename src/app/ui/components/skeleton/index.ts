import { Element, Attr } from '../../../element';
import css from './skeleton.scss';
import Template from '@master/template';

const NAME = 'skeleton';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonElement extends HTMLElement {

    template = new Template(() => {
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
