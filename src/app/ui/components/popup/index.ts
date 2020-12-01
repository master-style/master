import { Element, ToggleableElement } from '../../../element';
import css from './popup.scss';

const NAME = 'popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class PopupElement extends ToggleableElement {
    template = window['Master'](() => [
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.root = element
        }, [
        ]
    ]);

    render() {
        this.template.render(this.shadowRoot);
    }
}
