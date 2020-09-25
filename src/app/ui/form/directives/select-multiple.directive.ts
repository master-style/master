import { Directive, ElementRef, forwardRef, Host, Input, OnDestroy, Optional, Renderer2, StaticProvider } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SELECT_MULTIPLE_VALUE_ACCESSOR: StaticProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
    multi: true
};

// tslint:disable-next-line: max-classes-per-file
@Directive({
    selector:
        'm-select[multiple][formControlName],m-select[multiple][formControl],m-select[multiple][ngModel]',
    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
})
export class SelectMultipleControlValueAccessor implements ControlValueAccessor {
    /**
     * @description
     * The current value
     */
    value: any;

    /**
     * @description
     * The registered callback function called when a change event occurs on the input element.
     */
    onChange = (_: any) => { };

    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */
    onTouched = () => { };

    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    @Input()
    set compareWith(fn: (o1: any, o2: any) => boolean) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }

    private _compareWith: (o1: any, o2: any) => boolean = Object.is;

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

    /**
     * @description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param value The value
     */
    writeValue(value: any): void {
        this.value = value;
    }

    /**
     * @description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param fn The callback function
     */
    registerOnChange(fn: (value: any) => any): void {
        this.onChange = (_: any) => {
            this.value = _.value;
            fn(this.value);
        };
    }

    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    registerOnTouched(fn: () => any): void {
        this.onTouched = fn;
    }

    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */
    setDisabledState(isDisabled: boolean): void {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }

}

/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
// tslint:disable-next-line: max-classes-per-file
@Directive({ selector: 'm-option' })
// tslint:disable-next-line: class-name
export class ɵNgSelectMultipleOption {
    // TODO(issue/24571): remove '!'.
    id!: string;
    /** @internal */
    _value: any;

    constructor(
        private _element: ElementRef, private _renderer: Renderer2,
        @Optional() @Host() private _select: SelectMultipleControlValueAccessor) {
    }

    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    @Input('ngValue')
    set ngValue(value: any) {
        this._value = value;
        this._setElementValue(value);
    }

    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    @Input('value')
    set value(value: any) {
        this._value = value;
        this._setElementValue(value);
    }

    /** @internal */
    _setElementValue(value: string): void {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }

    /** @internal */
    _setSelected(selected: boolean) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }

}

export { ɵNgSelectMultipleOption as NgSelectMultipleOption };