import { Directive, ElementRef, forwardRef, Renderer2, StaticProvider } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SELECT_VALUE_ACCESSOR: StaticProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectControlValueAccessor),
    multi: true
};

@Directive({
    selector:
        'm-select:not([multiple])[formControlName],m-select:not([multiple])[formControl],m-select:not([multiple])[ngModel]',
    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
    providers: [SELECT_VALUE_ACCESSOR]
})
export class SelectControlValueAccessor implements ControlValueAccessor {

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
        this.onChange = (value) => {
            fn(value);
        };
    }

    registerOnTouched(fn: () => any): void {
        this.onTouched = fn;
    }
}