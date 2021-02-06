import { Element } from '../../../element';
import css from './overlay.scss';
import Template from '@master/template';

const NAME = 'overlay';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonOverlay extends HTMLElement {
    template = new Template(() => ['slot']);

    render() {
        this.template.render(this.shadowRoot);
    }
}
