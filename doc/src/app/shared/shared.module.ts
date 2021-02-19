import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDirective } from './code.directive';
import { TranslateModule } from '@ngx-translate/core';
import { PropComponent } from './prop/prop.component';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';
import { ControlPropComponent } from './control-prop/control-prop.component';

import { FormModule } from '@master/angular';

@NgModule({
    declarations: [
        CodeDirective,
        PropComponent,
        HyperlinkComponent,
        ControlPropComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FormModule
    ],
    exports: [
        CommonModule,
        CodeDirective,
        TranslateModule,
        FormModule,
        PropComponent,
        HyperlinkComponent,
        ControlPropComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
