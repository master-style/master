import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioValueAccessor, RadioRegistry } from './check/radio.directive';

@NgModule({
    declarations: [
        RadioValueAccessor
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        RadioRegistry
    ],
    exports: [
        FormsModule,
        RadioValueAccessor
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
