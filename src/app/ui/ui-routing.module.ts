import { TextareaComponent } from './components/controls/textarea/textarea.component';
import { SwitchComponent } from './components/controls/switch/switch.component';
import { SelectComponent } from './components/controls/select/select.component';
import { InputComponent } from './components/controls/input/input.component';
import { CheckComponent } from './components/controls/check/check.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { BreadcrumbComponent } from './decorators/breadcrumb/breadcrumb.component';
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
import { FigureComponent } from './decorators/figure/figure.component';

import { RouteResolver } from '../shared/route.resolver';
import { ItemComponent } from './components/item/item.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

export const uiRoutes: Routes = [
    { path: 'ui' },
    { path: 'animation', component: AnimationComponent, resolve: { route: RouteResolver } },
    { path: 'breakpoint', component: BreakpointComponent, resolve: { route: RouteResolver } },
    { path: 'color', component: ColorComponent, resolve: { route: RouteResolver } },
    {
        path: 'components', children: [
            { path: 'control' },
            { path: 'button', component: ButtonComponent, resolve: { route: RouteResolver } },
            { path: 'select', component: SelectComponent, resolve: { route: RouteResolver } },
            { path: 'input', component: InputComponent, resolve: { route: RouteResolver } },
            { path: 'textarea', component: TextareaComponent, resolve: { route: RouteResolver } },
            { path: 'check', component: CheckComponent, resolve: { route: RouteResolver } },
            { path: 'switch', component: SwitchComponent, resolve: { route: RouteResolver } },
            { path: 'data-render' },
            { path: 'badge', component: BadgeComponent, resolve: { route: RouteResolver } },
            { path: 'card', component: CardComponent, resolve: { route: RouteResolver } },
            { path: 'chats', component: ChatsComponent, resolve: { route: RouteResolver } },
            { path: 'chip', component: ChipComponent, data: { compositions: ['HTML', 'CSS'] }, resolve: { route: RouteResolver } },
            { path: 'flows', component: FlowsComponent, resolve: { route: RouteResolver } },
            { path: 'info', component: InfoComponent, resolve: { route: RouteResolver } },
            { path: 'item', component: ItemComponent, resolve: { route: RouteResolver } },
            { path: 'list', component: ListComponent, resolve: { route: RouteResolver } },
            { path: 'ribbon', component: RibbonComponent, resolve: { route: RouteResolver } },
            { path: 'table', component: TableComponent, resolve: { route: RouteResolver } },
            { path: 'navigator' },
            { path: 'tabs', component: TabsComponent, resolve: { route: RouteResolver } },
            { path: 'interactive' },
            { path: 'collapse', component: CollapseComponent, resolve: { route: RouteResolver } },
            { path: 'modal', component: ModalComponent, resolve: { route: RouteResolver } },
            { path: 'popup', component: PopupComponent, resolve: { route: RouteResolver } },
            { path: 'scroll', component: ScrollComponent, resolve: { route: RouteResolver } },
            { path: 'progress-indicator' },
            { path: 'progress', component: ProgressComponent, resolve: { route: RouteResolver } },
            { path: 'skeleton', component: SkeletonComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'decorators', children: [
            { path: 'article', component: ArticleComponent, resolve: { route: RouteResolver } },
            { path: 'breadcrumb', component: BreadcrumbComponent, resolve: { route: RouteResolver } },
            { path: 'figure', component: FigureComponent, resolve: { route: RouteResolver } },
        ]
    },
    { path: 'icon', component: IconComponent },
];

@NgModule({
    imports: [RouterModule.forChild(uiRoutes)],
    exports: [RouterModule]
})
export class UiRoutingModule { }
