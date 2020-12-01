import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRoutingModule } from './element-routing.module';
import { AttrComponent } from './attr/attr.component';
import { ClickableComponent } from './clickable/clickable.component';
import { ControlComponent } from './control/control.component';
import { EventComponent } from './event/event.component';
import { TargetComponent } from './target/target.component';


@NgModule({
    declarations: [
        AttrComponent,
        ClickableComponent,
        ControlComponent,
        TargetComponent,
        EventComponent
    ],
    imports: [
        CommonModule,
        ElementRoutingModule
    ]
})
export class ElementModule { }
