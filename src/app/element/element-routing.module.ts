import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteResolver } from '../shared/route.resolver';

import { AttrComponent } from './attr/attr.component';

export const elementRoutes: Routes = [
    { path: 'prop', component: AttrComponent, resolve: { route: RouteResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(elementRoutes)],
    exports: [RouterModule]
})
export class ElementRoutingModule { }
