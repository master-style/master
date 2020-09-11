import { Attr } from '../../../element';

type elementToken = string | { [key: string]: any };

export default class MasterControl extends HTMLElement {

    template = $(() => [
        'slot'
    ]);

    @Attr({ render: true })
    type: string;

    @Attr({ render: true })
    name: string;

    @Attr({ render: true })
    label: string;

    @Attr({ render: true })
    placeholder: string;

    @Attr({ render: true })
    disabled: boolean;

    @Attr({ render: true })
    required: boolean;

    @Attr({ render: true, key: 'readonly' })
    readOnly: boolean;

    @Attr({ render: true })
    validate: string;

    @Attr({ render: true })
    invalidate: string;

    @Attr({ render: true })
    warning: string;

    @Attr({ render: true })
    value: any;

    @Attr({ render: true })
    autocomplete: string;

    @Attr({ render: true })
    max: number;

    @Attr({ render: true })
    min: number;

    @Attr({ render: true })
    maxLength: number;

    @Attr({ render: true })
    minLength: number;

    @Attr({ render: true })
    pattern: string;

    @Attr({ render: true })
    size: number;

    @Attr({ render: true })
    step: number;

}
