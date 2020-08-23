import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { ClassComponent } from './dom/class/class.component';
import { AttrComponent } from './dom/attr/attr.component';
import { SelectorComponent } from './dom/selector/selector.component';
import { CreateComponent } from './dom/create/create.component';
import { CssComponent } from './dom/css/css.component';
import { EventListenerComponent } from './dom/event-listener/event-listener.component';
import { ArrayComponent } from './utils/array/array.component';
import { DebounceComponent } from './utils/debounce/debounce.component';
import { DistinguishComponent } from './utils/distinguish/distinguish.component';
import { ExtendComponent } from './utils/extend/extend.component';
import { StringComponent } from './utils/string/string.component';
import { TransformComponent } from './utils/transform/transform.component';

@NgModule({
    declarations: [
        ClassComponent,
        AttrComponent,
        SelectorComponent,
        CreateComponent,
        CssComponent,
        EventListenerComponent,
        ArrayComponent,
        DebounceComponent,
        DistinguishComponent,
        ExtendComponent,
        StringComponent,
        TransformComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ]
})
export class CoreModule { }