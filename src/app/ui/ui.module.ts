import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
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
import { InstallationComponent } from './guideline/installation/installation.component';
import { DisplayComponent } from './modifiers/display/display.component';
import { VisibilityComponent } from './modifiers/visibility/visibility.component';
import { ArticleComponent } from './decorators/article/article.component';
import { GridComponent } from './layout/grid/grid.component';
import { AlignmentComponent } from './modifiers/alignment/alignment.component';
import { PositionComponent } from './modifiers/position/position.component';
import { WrapComponent } from './modifiers/wrap/wrap.component';
import { AppComponent } from './layout/app/app.component';
import { AreaComponent } from './modifiers/area/area.component';
import { BackgroundComponent } from './modifiers/background/background.component';
import { BorderComponent } from './modifiers/border/border.component';
import { FontComponent } from './modifiers/font/font.component';
import { HoverComponent } from './modifiers/hover/hover.component';
import { MarginComponent } from './modifiers/margin/margin.component';
import { PaddingComponent } from './modifiers/padding/padding.component';
import { RadiusComponent } from './modifiers/radius/radius.component';
import { ScaleComponent } from './modifiers/scale/scale.component';
import { ShadowComponent } from './modifiers/shadow/shadow.component';
import { TextComponent } from './modifiers/text/text.component';
import { ZIndexComponent } from './modifiers/z-index/z-index.component';
import { DialogComponent } from './interactions/dialog/dialog.component';
import { RippleComponent } from './interactions/ripple/ripple.component';
import { LoadingComponent } from './interactions/loading/loading.component';
import { AnimationComponent } from './animation/animation.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { InputComponent } from './components/controls/input/input.component';
import { SelectComponent } from './components/controls/select/select.component';
import { TextareaComponent } from './components/controls/textarea/textarea.component';
import { SwitchComponent } from './components/controls/switch/switch.component';
import { CheckComponent } from './components/controls/check/check.component';
import { FigureComponent } from './decorators/figure/figure.component';

@NgModule({
    declarations: [
        IconComponent,
        ColorComponent,
        BreakpointComponent,
        BadgeComponent,
        CardComponent,
        ChatsComponent,
        ChipComponent,
        CollapseComponent,
        FlowsComponent,
        InfoComponent,
        ListComponent,
        ModalComponent,
        PopupComponent,
        ProgressComponent,
        RibbonComponent,
        ScrollComponent,
        TableComponent,
        TabsComponent,
        BreadcrumbsComponent,
        InstallationComponent,
        DisplayComponent, VisibilityComponent, ArticleComponent, GridComponent, AlignmentComponent, PositionComponent, WrapComponent, AppComponent,
        AreaComponent, BackgroundComponent, BorderComponent, FontComponent, HoverComponent, MarginComponent, PaddingComponent, RadiusComponent, ScaleComponent, ShadowComponent, TextComponent, ZIndexComponent,
        DialogComponent,
        RippleComponent,
        LoadingComponent,
        AnimationComponent,
        ButtonComponent,
        InputComponent,
        SelectComponent,
        TextareaComponent,
        SwitchComponent,
        CheckComponent,
        FigureComponent,
    ],
    imports: [
        CommonModule,
        UiRoutingModule
    ]
})
export class UiModule { }
