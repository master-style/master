import { Element, Attr } from '../../../element';
import css from './index.scss';

const NAME = 'overlay';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonOverlay extends HTMLElement {
    template = $(() => ['slot']);

    render() {
        this.template.render(this.shadowRoot);
    }
}
