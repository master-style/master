import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioValueAccessor, RadioRegistry } from './check/check.directive';
import { FormsModule } from '@angular/forms';

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
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
