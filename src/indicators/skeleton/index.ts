import { Element, MasterElement, Attr } from '@master/element';
import { Template } from '@master/template';
import css from './skeleton.scss';

const NAME = 'skeleton';


@Element('m-' + NAME)
export class SkeletonElement extends MasterElement {
    static css = css;

    template = new Template(() => [
        'div', {
            part: 'bg', $css: {
                height: this.height
            }
        }
    ]);

    @Attr({
        onUpdate(this: SkeletonElement, value: number) {
            this.css('width', value);
        }
    })
    width: number;

    @Attr()
    height: number;

    render() {
        this.template.render(this.shadowRoot);
    }
}
