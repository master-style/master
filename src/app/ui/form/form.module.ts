import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioControlValueAccessor, RadioControlRegistry } from './check/radio.directive';
import { CheckboxRequiredValidator, CheckboxControlValueAccessor } from './check/checkbox.directive';

const SHARED_DIRECTIVES: any[] = [
    RadioControlValueAccessor,
    CheckboxControlValueAccessor,
    CheckboxRequiredValidator
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
