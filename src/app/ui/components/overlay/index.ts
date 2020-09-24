import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'overlay';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonOverlay extends HTMLElement {}
