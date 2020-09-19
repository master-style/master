import { Element } from '@element';
import css from './index.scss';

const NAME = 'breadcrumb';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterBreadcrumb extends HTMLElement {
    template = $(() => ['slot']);
    render() {
        this.template.render(this.shadowRoot);
    }
}
