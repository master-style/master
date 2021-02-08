import { Element, MasterElement, Attr } from '@master/element';
import { Template } from '@master/template';
import css from './skeleton.scss';

const NAME = 'skeleton';


@Element('m-' + NAME)
export class SkeletonElement extends MasterElement {
    static css = css;

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
