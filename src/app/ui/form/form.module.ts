import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioControlValueAccessor, RadioControlRegistry } from './radio.directive';
import { CheckboxRequiredValidator, CheckboxControlValueAccessor } from './checkbox.directive';
import { DefaultValueAccessor } from './control.directive';

const SHARED_DIRECTIVES: any[] = [
    RadioControlValueAccessor,
    CheckboxControlValueAccessor,
    CheckboxRequiredValidator,
    DefaultValueAccessor
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
