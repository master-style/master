import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRoutingModule } from './element-routing.module';
import { AttrComponent } from './attr/attr.component';


@NgModule({
    declarations: [
        AttrComponent
    ],
    imports: [
        CommonModule,
        ElementRoutingModule
    ]
})
export class ElementModule { }
