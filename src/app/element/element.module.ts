import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRoutingModule } from './element-routing.module';
import { PropComponent } from './prop/prop.component';


@NgModule({
    declarations: [
        PropComponent
    ],
    imports: [
        CommonModule,
        ElementRoutingModule
    ]
})
export class ElementModule { }
