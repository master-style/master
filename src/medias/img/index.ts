import { Attr, Element, MasterElement, Prop } from '@master/element';
import { Template } from '@master/template';
import css from './img.scss';

const NAME = 'img';

@Element('m-' + NAME)
export class ImgElement extends MasterElement {
    static css = css;

    template = new Template(() => [
        'img', {
            role: 'img',
            part: 'master',
            src: this.src,
            srcset: this.srcset,
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

    @Attr({ observe: false })
    complete: boolean = false;

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

    @Attr({
        onUpdate(img: ImgElement, value) {
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
        onUpdate(img: ImgElement, value) {
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

    @Attr({
        onUpdate(img: ImgElement, token) {
            if (token) {
                const splits = token.split('x');
                const w = splits[0];
                const h = splits[1];
                if (w && h) {
                    img.style.setProperty('--ratio', 1 / w * h * 100 + '%');
                    return;
                }
            }
            img.style.removeProperty('--ratio');
        }
    })
    ratio: string;

    render() {
        this.template.render(this.shadowRoot);
    }
}