import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponent } from './ui.component';
import { IconComponent } from './icon/icon.component';
import { ColorComponent } from './color/color.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ChipComponent } from './components/chip/chip.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { FlowsComponent } from './components/flows/flows.component';
import { InfoComponent } from './components/info/info.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { PopupComponent } from './components/popup/popup.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

const routes: Routes = [{ path: '', component: UiComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
