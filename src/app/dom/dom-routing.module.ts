import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './manipulations/class/class.component';
import { AttrComponent } from './manipulations/attr/attr.component';
import { CreateComponent } from './manipulations/create/create.component';
import { CssComponent } from './manipulations/css/css.component';
import { InstallationComponent } from './guideline/installation/installation.component';
import { CodingStyleComponent } from './guideline/coding-style/coding-style.component';
import { OnComponent } from './event-listener/on/on.component';
import { OffComponent } from './event-listener/off/off.component';

const routes: Routes = [
    {
        path: 'guideline', children: [
            { path: 'installation', component: InstallationComponent },
            { path: 'coding-style', component: CodingStyleComponent }
        ]
    },
    {
        path: 'manipulations', children: [
            { path: 'class', component: ClassComponent },
            { path: 'attr', component: AttrComponent },
            { path: 'create', component: CreateComponent },
            { path: 'css', component: CssComponent }
        ]
    },
    {
        path: 'event-listener', children: [
            { path: 'on', component: OnComponent },
            { path: 'off', component: OffComponent }
        ]
    },
    {
        path: 'traversings', children: [
            { path: '' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DomRoutingModule { }
