import { Element, MasterElement } from '@master/element';
import Template from '@master/template';
import css from './overlay.scss';

const NAME = 'overlay';

@Element('m-' + NAME)
export class SkeletonOverlay extends MasterElement {
    static css = css;
    
    template = new Template(() => ['slot']);

    render() {
        this.template.render(this.shadowRoot);
    }
}
