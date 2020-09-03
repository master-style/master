import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ClassComponent } from './manipulations/class/class.component';
import { AttrComponent } from './manipulations/attr/attr.component';
import { CssComponent } from './manipulations/css/css.component';
import { InstallationComponent } from './guideline/installation/installation.component';
import { CodingStyleComponent } from './guideline/coding-style/coding-style.component';
import { OnComponent } from './event-listener/on/on.component';
import { OffComponent } from './event-listener/off/off.component';
import { FilterComponent } from './traversings/filter/filter.component';
import { ForEachComponent } from './traversings/for-each/for-each.component';
import { IndexOfComponent } from './traversings/index-of/index-of.component';
import { HtmlComponent } from './manipulations/html/html.component';

export const domRoutes: Routes = [
    { path: 'DOM' },
    {
        path: 'guideline', children: [
            { path: 'installation', component: InstallationComponent },
            { path: 'coding-style', component: CodingStyleComponent }
        ]
    },
    { path: 'create', component: CreateComponent },
    {
        path: 'event-listener', children: [
            { path: 'on', component: OnComponent },
            { path: 'off', component: OffComponent }
        ]
    },
    {
        path: 'manipulations', children: [
            { path: 'attr', component: AttrComponent },
            { path: 'class', component: ClassComponent },
            { path: 'css', component: CssComponent },
            { path: 'html', component: HtmlComponent }
        ]
    },
    {
        path: 'traversings', children: [
            { path: 'filter', component: FilterComponent },
            { path: 'for-each', component: ForEachComponent },
            { path: 'index-of', component: IndexOfComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(domRoutes)],
    exports: [RouterModule]
})
export class DomRoutingModule { }
