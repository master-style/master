import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRoutingModule } from './element-routing.module';
import { AttrComponent } from './attr/attr.component';
import { ClickableComponent } from './clickable/clickable.component';
import { ControlComponent } from './control/control.component';
import { ToggleableComponent } from './toggleable/toggleable.component';


@NgModule({
    declarations: [
        AttrComponent,
        ClickableComponent,
        ControlComponent,
        ToggleableComponent
    ],
    imports: [
        CommonModule,
        ElementRoutingModule
    ]
})
export class ElementModule { }
