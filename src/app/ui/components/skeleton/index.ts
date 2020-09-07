import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'skeleton';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterSkeleton extends HTMLElement {

    template = $(() => {
        let style = '';
        if (this.height) style += 'height:' + this.height + ';';
        if (this.width) style += 'width:' + this.width;
        return [
            'div', { part: 'bg', style }
        ];
    });

    @Attr({ render: true })
    width: number;

    @Attr({ render: true })
    height: number;

    render() {
        this.template.render(this.shadowRoot);
    }
}
