import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDirective } from './code.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [CodeDirective],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        CodeDirective,
        TranslateModule
    ]
})
export class SharedModule { }
