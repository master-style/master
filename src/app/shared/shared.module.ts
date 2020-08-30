import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDirective } from './code.directive';



@NgModule({
    declarations: [CodeDirective],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        CodeDirective
    ]
})
export class SharedModule { }
