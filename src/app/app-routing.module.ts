import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
    { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
