import { Element, ToggleableElement } from '../../../element';
import { createPopper } from '@popperjs/core';

import css from './popup.scss';

const NAME = 'popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class PopupElement extends ToggleableElement {
    root;
    trigger: HTMLElement;

    template = window['Master'](() => [
        'div', {
            part: 'root',
            $created: (element: HTMLElement) => this.root = element
        }, [
            'slot'
        ]
    ]);

    onOpen() {
        createPopper(this.trigger, this, {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    }

    render() {
        this.template.render(this.shadowRoot);
    }
}
