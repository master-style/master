import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './dom-routing.module';

import { ClassComponent } from './manipulations/class/class.component';
import { AttrComponent } from './manipulations/attr/attr.component';
import { CreateComponent } from './manipulations/create/create.component';
import { CssComponent } from './manipulations/css/css.component';
import { EventListenerComponent } from './event-listener/event-listener.component';

@NgModule({
    declarations: [
        ClassComponent,
        AttrComponent,
        CreateComponent,
        CssComponent,
        EventListenerComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ]
})
export class CoreModule { }