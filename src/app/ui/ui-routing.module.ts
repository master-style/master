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
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BreadcrumbComponent } from './decorators/breadcrumb/breadcrumb.component';
import { InstallationComponent } from './guideline/installation/installation.component';
import { DisplayComponent } from './modifiers/display/display.component';
import { VisibilityComponent } from './modifiers/visibility/visibility.component';
import { ArticleComponent } from './decorators/article/article.component';
import { AlignmentComponent } from './modifiers/alignment/alignment.component';
import { PositionComponent } from './modifiers/position/position.component';
import { WrapComponent } from './modifiers/wrap/wrap.component';
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
import { ContentComponent } from './components/content/content.component';

export const uiRoutes: Routes = [
    { path: 'ui' },
    { path: 'animation', data: { icon: 'activity' }, component: AnimationComponent, resolve: { route: RouteResolver } },
    { path: 'breakpoint', data: { icon: 'git-commit' }, component: BreakpointComponent, resolve: { route: RouteResolver } },
    { path: 'color', data: { icon: 'droplet' }, component: ColorComponent, resolve: { route: RouteResolver } },
    {
        path: 'components', data: { icon: 'box' }, children: [
            { path: 'content', component: ContentComponent, resolve: { route: RouteResolver } },
            { path: 'control' },
            { path: 'button', component: ButtonComponent, data: { compositions: ['HTML', 'CSS', 'JS'] }, resolve: { route: RouteResolver } },
            { path: 'select', component: SelectComponent, resolve: { route: RouteResolver } },
            { path: 'input', component: InputComponent, resolve: { route: RouteResolver } },
            { path: 'textarea', component: TextareaComponent, resolve: { route: RouteResolver } },
            { path: 'check', component: CheckComponent, resolve: { route: RouteResolver } },
            { path: 'switch', component: SwitchComponent, resolve: { route: RouteResolver } },
            { path: 'data-render' },
            { path: 'badge', component: BadgeComponent, resolve: { route: RouteResolver } },
            { path: 'card', component: CardComponent, data: { compositions: ['HTML', 'CSS', 'JS'] }, resolve: { route: RouteResolver } },
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
            { path: 'loading-indicator' },
            { path: 'progress', component: ProgressComponent, resolve: { route: RouteResolver } },
            { path: 'skeleton', component: SkeletonComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'modifiers', data: { icon: 'scissors' }, children: [
            // { path: '', component: , resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'alignment', component: AlignmentComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'area', component: AreaComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'background', component: BackgroundComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'border', component: BorderComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'display', component: DisplayComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'font', component: FontComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'hover', component: HoverComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'margin', component: MarginComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'padding', component: PaddingComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'position', component: PositionComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'radius', component: RadiusComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'scale', component: ScaleComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'shadow', component: ShadowComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'text', component: TextComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'visibility', component: VisibilityComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'wrap', component: WrapComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } },
            { path: 'z-index', component: ZIndexComponent, resolve: { route: RouteResolver }, data: { compositions: ['CSS'] } }
        ]
    },
    {
        path: 'decorators', data: {}, children: [
            { path: 'article', component: ArticleComponent, resolve: { route: RouteResolver } },
            { path: 'breadcrumb', component: BreadcrumbComponent, resolve: { route: RouteResolver } },
            { path: 'figure', component: FigureComponent, resolve: { route: RouteResolver } },
        ]
    },
    { path: 'icon', data: {}, component: IconComponent },
];

@NgModule({
    imports: [RouterModule.forChild(uiRoutes)],
    exports: [RouterModule]
})
export class UiRoutingModule { }
