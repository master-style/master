import { Attr, Element } from '@master/element';
import css from './img.scss';

const NAME = 'img';


@Element('m-' + NAME)
export class ImgElement extends HTMLElement {
    static css = css;

    @Attr()
    src: string;

    @Attr()
    srcset: string;
}
