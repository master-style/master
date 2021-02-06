import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TemplateRoutingModule } from './template.routing.module';


@NgModule({
    declarations: [
        TemplateComponent
    ],
    imports: [
        CommonModule,
        TemplateRoutingModule
    ]
})
export class TemplateModule { }
