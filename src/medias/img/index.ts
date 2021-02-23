import { Attr, Element, MasterElement } from '@master/element';
import { Template } from '@master/template';
import css from './img.scss';

const NAME = 'img';

@Element('m-' + NAME)
export class ImgElement extends MasterElement {
    static css = css;

    template = new Template(() => [
        'img', {
            part: 'master',
            src: this.src,
            srcset: this.srcset,
            width: this.width,
            height: this.height
        }
    ]);

    @Attr()
    src: string;

    @Attr()
    srcset: string;

    @Attr()
    width: number;

    @Attr()
    height: number;

    render() {
        this.template.render(this.shadowRoot);
    }
}