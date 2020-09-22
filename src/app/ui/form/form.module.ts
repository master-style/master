import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioControlValueAccessor, RadioControlRegistry } from './directives/radio.directive';
import { CheckboxRequiredValidator, CheckboxControlValueAccessor } from './directives/checkbox.directive';
import { DefaultValueAccessor } from './directives/control.directive';
import { NumberValueAccessor } from './directives/number.directive';
import { NgSelectMultipleOption, SelectMultipleControlValueAccessor } from './directives/select-multiple.directive';
import { NgSelectOption, SelectControlValueAccessor } from './directives/select.directive';

const SHARED_DIRECTIVES: any[] = [
    RadioControlValueAccessor,
    CheckboxControlValueAccessor,
    CheckboxRequiredValidator,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgSelectMultipleOption,
    NgSelectOption,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor
];

@NgModule({
    declarations: SHARED_DIRECTIVES,
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        RadioControlRegistry
    ],
    exports: [
        FormsModule,
        ...SHARED_DIRECTIVES

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
