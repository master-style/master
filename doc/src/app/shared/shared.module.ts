import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDirective } from './code.directive';
import { TranslateModule } from '@ngx-translate/core';
import { PropComponent } from './prop/prop.component';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';
import { ControlPropComponent } from './control-prop/control-prop.component';

@NgModule({
    declarations: [
        CodeDirective,
        PropComponent,
        HyperlinkComponent,
        ControlPropComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        CodeDirective,
        TranslateModule,
        PropComponent,
        HyperlinkComponent,
        ControlPropComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
