import { Attr, Element, MasterElement, Prop } from '@master/element';
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
            height: this.height,
            alt: this.alt,
            crossorigin: this.crossorigin,
            decoding: this.decoding,
            ismap: this.ismap,
            loading: this.loading,
            referrerpolicy: this.referrerpolicy,
            sizes: this.sizes,
            usemap: this.usemap,
            $created: (img: HTMLImageElement) => {
                this.master = img;
                img.onload = () => {
                    this.complete = true;
                };
            }
        },
        'm-skeleton', {
            $if: !this.complete && (this.src || this.srcset),
            part: 'skeleton',
            class: 'animated'
        }
    ]);

    master: HTMLImageElement;

    @Prop()
    complete = false;

    @Attr({ render: false })
    fade: boolean;

    // native

    @Attr({
        onUpdate(this: ImgElement) {
            this.complete = false;
        }
    })
    src: string;

    @Attr({
        onUpdate(this: ImgElement) {
            this.complete = false;
        }
    })
    srcset: string;

    @Attr()
    width: number;

    @Attr()
    height: number;

    @Attr()
    alt: string;

    @Attr()
    crossorigin: string;

    @Attr()
    decoding: string;

    @Attr()
    ismap: boolean;

    @Attr()
    loading: string;

    @Attr()
    referrerpolicy: string;

    @Attr()
    sizes: string;

    @Attr()
    usemap: string;

    render() {
        this.template.render(this.shadowRoot);
    }
}