import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RadioControlValueAccessor, RadioControlRegistry } from './directives/radio.directive';
import { CheckboxRequiredValidator, CheckboxControlValueAccessor } from './directives/checkbox.directive';
import { DefaultValueAccessor } from './directives/control.directive';
import { NumberValueAccessor } from './directives/number.directive';
import { OptionControlValueAccessor, SelectMultipleControlValueAccessor } from './directives/select-multiple.directive';
import { SelectControlValueAccessor } from './directives/select.directive';

const SHARED_DIRECTIVES: any[] = [
    RadioControlValueAccessor,
    CheckboxControlValueAccessor,
    CheckboxRequiredValidator,
    DefaultValueAccessor,
    NumberValueAccessor,
    OptionControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor
];

@NgModule({
    declarations: SHARED_DIRECTIVES,
    imports: [],
    providers: [
        RadioControlRegistry
    ],
    exports: [
        ...SHARED_DIRECTIVES

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
