import { Element, MasterElement, Attr } from '@master/element';
import Template from '@master/template';
import css from './skeleton.scss';

const NAME = 'skeleton';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonElement extends MasterElement {

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
