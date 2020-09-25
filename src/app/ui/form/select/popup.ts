import { Element, Attr, ToggleableElement } from '@element';
import { OptionElement } from '../option';

import css from './index.scss';

const NAME = 'select-popup';

@Element({
    tag: 'm-' + NAME,
    css
})
export class SelectPopupElement extends ToggleableElement {

    @Attr({ reflect: false, observe: false })
    options;

    @Attr({ reflect: false, observe: false })
    multiple: boolean;

    template = $(() => [
        'm-content', {
            'scroll-y': true,
            class: 'bg:popup'
        }, () => this.options.map((eachOption: OptionElement) => [
            'm-item', {
                $text: eachOption.textContent,
                $option: eachOption
            }
        ]),
    ]);

    protected async toggling(
        options: KeyframeEffectOptions
    ) {
        let keyframes: any;

        let originOption: OptionElement;

        if (this.multiple) {
            // value and oldValue always not be same
            originOption = this.options
                .filter((eachOption) => eachOption.selected)[0];
        } else {
            originOption = this.options
                .find((eachOption) => eachOption.selected);
        }

        let originRect = { top: 0, height: 0 };
        let $origin;
        // if (originOption && !originOption.hidden) {
        //     $origin = originOption.$wrap;
        //     this.$selectWrap.to($origin, 0);
        //     originRect = $origin.getBoundingClientRect();
        // }
        // const
        //     selectRect = this.$container.getBoundingClientRect(),
        //     wrapH = this.$selectWrap.offsetHeight,
        //     wrapW = this.$selectWrap.offsetWidth,
        //     windowH = $window.innerHeight,
        //     windowW = $window.innerWidth,
        //     originOffsetTop = originRect.top + originRect.height / 2;
        // let top = selectRect.top + ($origin ? selectRect.height / 2 : 0) - originOffsetTop;
        // let left = selectRect.left;
        // // exceed Y
        // let exceedY = 0;
        // if (top <= 5) {
        //     exceedY = top - 5;
        //     top = 5;
        // } else if (top + wrapH >= windowH - 5) {
        //     exceedY = top + wrapH - windowH + 5;
        //     top = windowH - wrapH - 5;
        // };
        // // exceed X
        // if (left <= 5) {
        //     left = 5;
        // } else if (left + wrapW >= windowW - 5) {
        //     left = windowW - wrapW - 5;
        // }
        // this.$selectWrap.css({
        //     top,
        //     left,
        //     minWidth: selectRect.width,
        //     transformOrigin: '0 ' + (originOffsetTop + exceedY) + 'px'
        // });

        await this.animation.finished;
    }

    render() {
        this.template.render(this.shadowRoot);
    }

    removeRender() {
        this.template.remove();
    }

}
