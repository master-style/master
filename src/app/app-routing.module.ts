import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule), canActivate: [AppService] },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule), canActivate: [AppService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
