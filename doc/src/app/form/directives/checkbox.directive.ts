import { Directive, ElementRef, forwardRef, Renderer2, StaticProvider } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    RequiredValidator,
    AbstractControl,
    ValidationErrors,
    Validators
} from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxControlValueAccessor),
    multi: true,
};

/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
export const CHECKBOX_REQUIRED_VALIDATOR: StaticProvider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CheckboxRequiredValidator),
    multi: true
};

/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
@Directive({
    selector:
        'm-check:not([type=radio])[formControlName],m-check:not([type=radio])[formControl],m-check:not([type=radio])[ngModel]',
    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
    providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxControlValueAccessor implements ControlValueAccessor {
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */
    onChange = (_: any) => { };

    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */
    onTouched = () => { };

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

    /**
     * Sets the "checked" property on the input element.
     * @nodoc
     */
    writeValue(value: any): void {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
    }

    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */
    setDisabledState(isDisabled: boolean): void {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}

// tslint:disable-next-line: max-classes-per-file
@Directive({
    selector:
        'm-check:not([type=radio])[required][formControlName],m-check:not([type=radio])[required][formControl],m-check:not([type=radio])[required][ngModel]',
    providers: [CHECKBOX_REQUIRED_VALIDATOR],
    host: { '[attr.required]': 'required ? "" : null' }
})
export class CheckboxRequiredValidator extends RequiredValidator {
    /**
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    validate(control: AbstractControl): ValidationErrors | null {
        return this.required ? Validators.requiredTrue(control) : null;
    }
}
