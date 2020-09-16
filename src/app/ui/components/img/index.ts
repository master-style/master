import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'img';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterImg extends HTMLElement {

    @Attr()
    width: string;

    @Attr()
    height: string;

    @Attr()
    src: string;

    @Attr()
    alt: string;
}
