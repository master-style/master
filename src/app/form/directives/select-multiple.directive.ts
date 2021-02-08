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

    constructor(
        private el: ElementRef,
        private _renderer: Renderer2
    ) {}

    onChange = (value: any) => {}

    onTouched = () => { };

    writeValue(value: any): void {
        this._renderer.setProperty(this.el.nativeElement, 'value', value);
    }

    registerOnChange(fn): void {
        this.onChange = (nativeElement) => {
            fn(nativeElement.value);
        };
    }

    registerOnTouched(fn: () => any): void {
        this.onTouched = fn;
    }
}

// tslint:disable-next-line: max-classes-per-file
@Directive({ selector: 'm-option' })
export class OptionControlValueAccessor {

    constructor(
        private el: ElementRef,
        private _renderer: Renderer2,
        @Optional() @Host() private _select: SelectMultipleControlValueAccessor
    ) {
    }

    @Input('value')
    set value(value: any) {
        this._renderer.setProperty(this.el.nativeElement, 'value', value);
    }
}