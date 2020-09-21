import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterRadioValueAccessor, MasterRadioRegistry } from './check/radio.directive';

@NgModule({
    declarations: [
        MasterRadioValueAccessor
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MasterRadioRegistry
    ],
    exports: [
        FormsModule,
        MasterRadioValueAccessor
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
