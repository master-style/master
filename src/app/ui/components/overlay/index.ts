import { Element } from '../../../element';
import css from './overlay.scss';

const NAME = 'overlay';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonOverlay extends HTMLElement {
    template = window['Master'](() => ['slot']);

    render() {
        this.template.render(this.shadowRoot);
    }
}
