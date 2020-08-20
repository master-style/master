import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';
import { AttrComponent } from './attr/attr.component';
import { SelectorComponent } from './selector/selector.component';
import { CreateComponent } from './create/create.component';
import { CssComponent } from './css/css.component';
import { EventListenerComponent } from './event-listener/event-listener.component';



@NgModule({
    declarations: [ClassComponent, AttrComponent, SelectorComponent, CreateComponent, CssComponent, EventListenerComponent],
    imports: [
        CommonModule
    ]
})
export class DomModule { }
