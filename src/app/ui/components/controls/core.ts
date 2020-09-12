import { Attr } from '../../../element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    template = $(() => [
        'slot'
    ]);

    @Attr()
    type: string;

    @Attr()
    name: string;

    @Attr()
    label: string;

    @Attr()
    placeholder: string;

    @Attr()
    disabled: boolean;

    @Attr()
    required: boolean;

    @Attr({ key: 'readonly' })
    readOnly: boolean;

    @Attr()
    validate: string;

    @Attr()
    invalidate: string;

    @Attr()
    warning: string;

    @Attr()
    autocomplete: string;

    @Attr()
    max: number;

    @Attr()
    min: number;

    @Attr()
    maxLength: number;

    @Attr()
    minLength: number;

    @Attr()
    pattern: string;

    @Attr()
    size: number;

    @Attr()
    step: number;

    @Attr({ reflect: false, render: false })
    value: any;

}