import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { CardComponent } from './card/card.component';
import { ChatsComponent } from './chats/chats.component';
import { ChipComponent } from './chip/chip.component';
import { CollapseComponent } from './collapse/collapse.component';
import { FlowsComponent } from './flows/flows.component';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { PopupComponent } from './popup/popup.component';
import { ProgressComponent } from './progress/progress.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ScrollComponent } from './scroll/scroll.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [BadgeComponent, CardComponent, ChatsComponent, ChipComponent, CollapseComponent, FlowsComponent, InfoComponent, ListComponent, SpinnerComponent, ModalComponent, PopupComponent, ProgressComponent, RibbonComponent, ScrollComponent, TableComponent, TabsComponent, BreadcrumbsComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
