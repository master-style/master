import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
    { path: 'dom', loadChildren: () => import('./dom/dom.module').then(m => m.DomModule) },
    { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
    { path: 'element', loadChildren: () => import('./element/element.module').then(m => m.ElementModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
