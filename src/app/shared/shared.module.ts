import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDirective } from './code.directive';
import { TranslateModule } from '@ngx-translate/core';
import { PropComponent } from './prop/prop.component';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';

@NgModule({
    declarations: [CodeDirective, PropComponent, HyperlinkComponent],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        CodeDirective,
        TranslateModule,
        PropComponent,
        HyperlinkComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
