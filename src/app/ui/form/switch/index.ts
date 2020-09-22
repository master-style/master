import { MasterCheck } from '@ui/form/check';
import { Element, Attr } from '@element';
import css from './index.scss';

const NAME = 'switch';

@Element({
    tag: 'm-' + NAME,
    css
})
export class MasterSwitch extends MasterCheck {

    readonly elementName: string = NAME;

    template = $(() => [
        'svg', {
            part: 'icon',
            viewBox: '0 0 20 20',
            $namespace: 'http://www.w3.org/2000/svg',
            $html: '<rect x=2 y=2 part="button-icon" style="filter: url(#s)"/><filter id="s" x="0" y="0" filterUnits="userSpaceOnUse"><feOffset dy="1" input="SourceAlpha"/><feGaussianBlur stdDeviation="1" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter>'
        },
        'slot'
    ]);
}
