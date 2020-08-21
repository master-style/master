import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponent } from './ui.component';
import { IconComponent } from './icon/icon.component';
import { ColorComponent } from './color/color.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';

const routes: Routes = [{ path: '', component: UiComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
