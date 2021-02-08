import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDirective } from './display.directive';



@NgModule({
    declarations: [
        DisplayDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DisplayDirective
    ]
})
export class DisplayModule { }
