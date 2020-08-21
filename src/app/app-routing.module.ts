import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
