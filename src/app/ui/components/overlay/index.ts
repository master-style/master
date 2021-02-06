import { Element, MasterElement } from '@master/element';
import Template from '@master/template';
import css from './overlay.scss';

const NAME = 'overlay';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SkeletonOverlay extends MasterElement {
    template = new Template(() => ['slot']);

    render() {
        this.template.render(this.shadowRoot);
    }
}
