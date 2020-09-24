import { Element, Attr, ControlElement } from '@element';
import { OptionElement } from '../option';

import css from './index.scss';

const NAME = 'select';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectElement extends ControlElement {

    @Attr({ key: 'tabindex' })
    tabIndex = -1;

    readonly #options = [];

    get options() {
        return this.#options;
    }

    add(option: OptionElement) {
        this.#options.push(option);
        this.updateValue();
    }

    delete(option: OptionElement) {
        this.#options.splice(this.#options.indexOf(option), 1);
    }

    updateValue() {
        if (this.multiple) {
            // value and oldValue always not be same
            this.value = this.#options
                .filter((eachOption) => eachOption.selected)
                .map((eachOption) => eachOption.value);
        } else {
            this.value = this.#options
                .find((eachOption) => eachOption.selected)?.value;
        }
    }

    controlTemplate = $(() => [
        'input', {
            'aria-hidden': true,
            tabindex: -1,
            name: this.name,
            required: this.required,
            $created: (element: HTMLInputElement) => {
                this.body = element;
                this.validity = element.validity;
            }
        }
    ]);

    template = $(() => [
        'slot',
        'div', {
            part: 'body',
            placeholder: this.placeholder,
            label: this.label, // for default select width
            $text: this.value
        },
        'm-icon', { name: 'unfold' },
        'fieldset', [
            'legend', [
                'span', { $text: this.label }
            ]
        ],
        'label', { $text: this.label }
    ]);

    optionsTemplate = $(() => [
        'm-content', { scrollY: true }, () => this.#options.map((eachOption: OptionElement) => [
            'm-item', { $text: eachOption.textContent }
        ])
    ]);

    @Attr({ observe: false, render: false })
    empty: boolean;

    @Attr({ observe: false, render: false })
    role: string = 'listbox';

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    placeholder: string;

    @Attr()
    label: string;

    @Attr()
    multiple: boolean;

    @Attr({ render: false })
    expanded: boolean;

    @Attr({
        updater(select: SelectElement, value: any) {
            ControlElement.valueUpdater(select, value);
            select.body.value = value;
            console.log(select.value);
        },
        reflect: false
    })
    value: any;

    @Attr()
    autocomplete: string;

    open() {

        let originOption: OptionElement;

        if (this.multiple) {
            // value and oldValue always not be same
            originOption = this.#options
                .filter((eachOption) => eachOption.selected)[0];
        } else {
            originOption = this.#options
                .find((eachOption) => eachOption.selected);
        }

        let originRect = { top: 0, height: 0 };
        let $origin;
        if (originOption && !originOption.hidden) {
            $origin = originOption.$wrap;
            this.$selectWrap.to($origin, 0);
            originRect = $origin.getBoundingClientRect();
        }
        const
            selectRect = this.$container.getBoundingClientRect(),
            wrapH = this.$selectWrap.offsetHeight,
            wrapW = this.$selectWrap.offsetWidth,
            windowH = $window.innerHeight,
            windowW = $window.innerWidth,
            originOffsetTop = originRect.top + originRect.height / 2;
        let top = selectRect.top + ($origin ? selectRect.height / 2 : 0) - originOffsetTop;
        let left = selectRect.left;
        // exceed Y
        let exceedY = 0;
        if (top <= 5) {
            exceedY = top - 5;
            top = 5;
        } else if (top + wrapH >= windowH - 5) {
            exceedY = top + wrapH - windowH + 5;
            top = windowH - wrapH - 5;
        };
        // exceed X
        if (left <= 5) {
            left = 5;
        } else if (left + wrapW >= windowW - 5) {
            left = windowW - wrapW - 5;
        }
        this.$selectWrap.css({
            top,
            left,
            minWidth: selectRect.width,
            transformOrigin: '0 ' + (originOffsetTop + exceedY) + 'px'
        });
    }

    onAdded() {
        this.on('focus', (event) => {
            console.log(event);
            this.open();
        });
    }

}
