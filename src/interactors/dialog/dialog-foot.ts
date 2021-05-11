import { Element, MasterElement } from '@master/element';
import { Template } from '@master/template';

import css from './dialog-foot.scss';

const NAME = 'dialog-foot';

@Element('m-' + NAME)
export class DialogFootElement extends MasterElement {
    static css = css;

    template: Template = new Template(() => [
        'slot'
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
