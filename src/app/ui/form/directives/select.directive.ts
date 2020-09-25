import { Directive, ElementRef, forwardRef, Host, Input, OnDestroy, Optional, Renderer2, StaticProvider } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SELECT_VALUE_ACCESSOR: StaticProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectControlValueAccessor),
    multi: true
};

function _buildValueString(id: string | null, value: any): string {
    if (id == null) return `${value}`;
    if (value && typeof value === 'object') value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}

function _extractId(valueString: string): string {
    return valueString.split(':')[0];
}

/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
@Directive({
    selector:
        'm-select:not([multiple])[formControlName],m-select:not([multiple])[formControl],m-select:not([multiple])[ngModel]',
    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
    providers: [SELECT_VALUE_ACCESSOR]
})
export class SelectControlValueAccessor implements ControlValueAccessor {
    value: any;
    /** @internal */
    _optionMap: Map<string, any> = new Map<string, any>();
    /** @internal */
    _idCounter: number = 0;

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
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param value The checked value
     */
    writeValue(value: any): void {
        this.value = value;
        const id: string | null = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        const valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    }

    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    registerOnChange(fn: (value: any) => any): void {
        this.onChange = (valueString: string) => {
            this.value = this._getOptionValue(valueString);
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

    /** @internal */
    _registerOption(): string {
        return (this._idCounter++).toString();
    }

    /** @internal */
    _getOptionId(value: any): string | null {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id), value)) return id;
        }
        return null;
    }

    /** @internal */
    _getOptionValue(valueString: string): any {
        const id: string = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
}
