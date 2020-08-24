import { TransformComponent } from './utils/transform/transform.component';
import { StringComponent } from './utils/string/string.component';
import { ExtendComponent } from './utils/extend/extend.component';
import { DebounceComponent } from './utils/debounce/debounce.component';
import { ArrayComponent } from './utils/array/array.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './dom/class/class.component';
import { AttrComponent } from './dom/attr/attr.component';
import { SelectorComponent } from './dom/selector/selector.component';
import { CreateComponent } from './dom/create/create.component';
import { CssComponent } from './dom/css/css.component';
import { EventListenerComponent } from './dom/event-listener/event-listener.component';
import { InstallationComponent } from './guideline/installation/installation.component';
import { CodingStyleComponent } from './guideline/coding-style/coding-style.component';

const routes: Routes = [
    {
        path: 'guideline', children: [
            { path: 'installation', component: InstallationComponent },
            { path: 'coding-style', component: CodingStyleComponent }
        ]
    },
    {
        path: 'dom', children: [
            { path: 'class', component: ClassComponent },
            { path: 'attr', component: AttrComponent },
            { path: 'selector', component: SelectorComponent },
            { path: 'create', component: CreateComponent },
            { path: 'css', component: CssComponent },
            { path: 'event-listener', component: EventListenerComponent }
        ]
    },
    {
        path: 'utils', children: [
            { path: 'array', component: ArrayComponent },
            { path: 'debounce', component: DebounceComponent },
            { path: 'extend', component: ExtendComponent },
            { path: 'string', component: StringComponent },
            { path: 'transform', component: TransformComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
