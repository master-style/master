import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteResolver } from '../shared/route.resolver';
import { TemplateComponent } from './template.component';

export const templateRoutes: Routes = [
    { path: '', component: TemplateComponent, resolve: { route: RouteResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(templateRoutes)],
    exports: [RouterModule]
})
export class TemplateRoutingModule { }
