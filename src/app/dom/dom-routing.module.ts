import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './manipulations/class/class.component';
import { AttrComponent } from './manipulations/attr/attr.component';
import { CssComponent } from './manipulations/css/css.component';
import { InstallationComponent } from './guideline/installation/installation.component';
import { CodingStyleComponent } from './guideline/coding-style/coding-style.component';
import { OnComponent } from './event-listener/on/on.component';
import { OffComponent } from './event-listener/off/off.component';
import { RouteResolver } from '../shared/route.resolver';

export const domRoutes: Routes = [
    { path: 'DOM' },
    {
        path: 'guideline', children: [
            { path: 'installation', component: InstallationComponent, resolve: { route: RouteResolver } },
            { path: 'coding-style', component: CodingStyleComponent, resolve: { route: RouteResolver } }
        ]
    },
    {
        path: 'event-listener', children: [
            { path: 'on', component: OnComponent, resolve: { route: RouteResolver } },
            { path: 'off', component: OffComponent, resolve: { route: RouteResolver } }
        ]
    },
    {
        path: 'manipulations', children: [
            { path: 'attr', component: AttrComponent, resolve: { route: RouteResolver } },
            { path: 'class', component: ClassComponent, resolve: { route: RouteResolver } },
            { path: 'css', component: CssComponent, resolve: { route: RouteResolver } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(domRoutes)],
    exports: [RouterModule]
})
export class DomRoutingModule { }
