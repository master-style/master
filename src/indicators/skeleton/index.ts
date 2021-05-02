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
        onUpdate(img: SkeletonElement, value) {
            const isNaN = Number.isNaN(+value);
            if (value === undefined || value === null) {
                img.style.removeProperty('width');
            } else {
                img.style.setProperty('width', isNaN ? value : value + 'px');
            }
        },
        render: false
    })
    width: string;

    @Attr({
        onUpdate(img: SkeletonElement, value) {
            const isNaN = Number.isNaN(+value);
            if (value === undefined || value === null) {
                img.style.removeProperty('height');
            } else {
                img.style.setProperty('height', isNaN ? value : value + 'px');
            }
        },
        render: false
    })
    height: string;

    render() {
        this.template.render(this.shadowRoot);
    }
}
