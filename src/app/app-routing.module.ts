import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'dom', loadChildren: () => import('./dom/dom.module').then(m => m.DomModule), canActivate: [AppService] },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule), canActivate: [AppService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
