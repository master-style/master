import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteResolver } from '../shared/route.resolver';

import { PropComponent } from './prop/prop.component';

export const elementRoutes: Routes = [
    { path: 'prop', component: PropComponent, resolve: { route: RouteResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(elementRoutes)],
    exports: [RouterModule]
})
export class ElementRoutingModule { }
