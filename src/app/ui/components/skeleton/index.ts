import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'skeleton';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterSkeleton extends HTMLElement {

    template = $(() => {
        this.css('width', this.width);
        return [
            'div', {
                part: 'bg', $css: {
                    height: this.height
                }
            }
        ];
    });

    @Attr()
    width: number;

    @Attr()
    height: number;

    render() {
        this.template.render(this.shadowRoot);
    }
}
