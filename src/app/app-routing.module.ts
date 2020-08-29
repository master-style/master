import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'dom', loadChildren: () => import('./dom/dom.module').then(m => m.DomModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
