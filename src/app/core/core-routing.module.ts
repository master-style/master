import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './class/class.component';
import { AttrComponent } from './attr/attr.component';
import { SelectorComponent } from './selector/selector.component';
import { CreateComponent } from './create/create.component';
import { CssComponent } from './css/css.component';
import { EventListenerComponent } from './event-listener/event-listener.component';

const routes: Routes = [
    {
        path: 'dom', children: [
            { path: 'class', component: ClassComponent },
            { path: 'attr', component: AttrComponent },
            { path: 'selector', component: SelectorComponent },
            { path: 'create', component: CreateComponent },
            { path: 'css', component: CssComponent },
            { path: 'event-listener', component: EventListenerComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
