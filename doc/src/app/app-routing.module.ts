
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconComponent } from './icon/icon.component';
import { ColorComponent } from './color/color.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { BadgeComponent } from './data-renders/badge/badge.component';
import { CardComponent } from './data-renders/card/card.component';
import { ChatsComponent } from './data-renders/chats/chats.component';
import { ChipComponent } from './data-renders/chip/chip.component';
import { FlowsComponent } from './data-renders/flows/flows.component';
import { InfoComponent } from './data-renders/info/info.component';
import { ListComponent } from './data-renders/list/list.component';
import { ModalComponent } from './interactors/modal/modal.component';
import { PopupComponent } from './interactors/popup/popup.component';
import { ProgressComponent } from './indicators/progress/progress.component';
import { RibbonComponent } from './data-renders/ribbon/ribbon.component';
import { TableComponent } from './data-renders/table/table.component';
import { TabsComponent } from './navigators/tabs/tabs.component';
import { BreadcrumbComponent } from './navigators/breadcrumb/breadcrumb.component';
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
import { FigureComponent } from './decorators/figure/figure.component';
import { DialogComponent } from './interactors/dialog/dialog.component';
import { RouteResolver } from './shared/route.resolver';
import { ItemComponent } from './data-renders/item/item.component';
import { SkeletonComponent } from './indicators/skeleton/skeleton.component';
import { ContentComponent } from './layout/content/content.component';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './form/validation/validation.component';
import { TextareaComponent } from './form/textarea/textarea.component';
import { SelectComponent } from './form/select/select.component';
import { InputComponent } from './form/input/input.component';
import { CheckComponent } from './form/check/check.component';
import { ButtonComponent } from './form/button/button.component';
import { EditorComponent } from './editor/editor.component';
import { OverviewComponent } from './overview/overview.component';
import { AppComponent } from './layout/app/app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GridComponent } from './layout/grid/grid.component';
import { HeaderComponent } from './layout/header/header.component';
import { OverlayComponent } from './layout/overlay/overlay.component';
import { ImgComponent } from './medias/img/img.component';

export const routes: Routes = [
    { path: 'overview', data: { icon: 'grid' }, component: OverviewComponent, resolve: { route: RouteResolver } },
    // { path: 'animation', data: { icon: 'activity' }, component: AnimationComponent, resolve: { route: RouteResolver } },
    // { path: 'components' },
    {
        path: 'data-render', data: { icon: 'eye' }, resolve: { route: RouteResolver }, children: [
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
        ]
    },
    {
        path: 'navigators', data: { icon: 'navigation' }, resolve: { route: RouteResolver }, children: [
            { path: 'breadcrumb', component: BreadcrumbComponent, resolve: { route: RouteResolver } },
            { path: 'tabs', component: TabsComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'interactors', data: { icon: 'shuffle' }, resolve: { route: RouteResolver }, children: [
            { path: 'dialog', component: DialogComponent, resolve: { route: RouteResolver } },
            { path: 'modal', component: ModalComponent, resolve: { route: RouteResolver } },
            { path: 'popup', component: PopupComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'indicators', data: { icon: 'loader' }, resolve: { route: RouteResolver }, children: [
            { path: 'progress', component: ProgressComponent, resolve: { route: RouteResolver } },
            { path: 'skeleton', component: SkeletonComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'form', data: { icon: 'sliders' }, resolve: { route: RouteResolver }, children: [
            { path: 'overview', component: FormComponent, resolve: { route: RouteResolver } },
            { path: 'validation', component: ValidationComponent, resolve: { route: RouteResolver } },
            // { path: 'control' },
            { path: 'button', component: ButtonComponent, data: { compositions: ['HTML', 'CSS', 'JS'] }, resolve: { route: RouteResolver } },
            { path: 'select', component: SelectComponent, resolve: { route: RouteResolver } },
            { path: 'input', component: InputComponent, resolve: { route: RouteResolver } },
            { path: 'textarea', component: TextareaComponent, resolve: { route: RouteResolver } },
            { path: 'check', component: CheckComponent, resolve: { route: RouteResolver } },
            { path: 'editor', component: EditorComponent, resolve: { route: RouteResolver } },
            { path: 'icon', data: { icon: 'image' }, component: IconComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'layout', data: { icon: 'grid' }, resolve: { route: RouteResolver }, children: [
            { path: 'app', component: AppComponent, resolve: { route: RouteResolver } },
            { path: 'grid', component: GridComponent, resolve: { route: RouteResolver } },
            { path: 'overlay', component: OverlayComponent, resolve: { route: RouteResolver } },
            // 元件
            { path: 'header', component: HeaderComponent, resolve: { route: RouteResolver } },
            { path: 'content', component: ContentComponent, resolve: { route: RouteResolver } },
            { path: 'footer', component: FooterComponent, resolve: { route: RouteResolver } },
        ]
    },
    {
        path: 'medias', data: { icon: 'image' }, resolve: { route: RouteResolver }, children: [
            { path: 'img', component: ImgComponent, resolve: { route: RouteResolver } },
        ]
    },
    // { path: 'utilities' },
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
        path: 'decorators', data: { icon: 'edit-1' }, children: [
            { path: 'article', component: ArticleComponent, resolve: { route: RouteResolver } },
            { path: 'figure', component: FigureComponent, resolve: { route: RouteResolver } },
        ]
    },
    // { path: 'specification' },
    { path: 'breakpoint', data: { icon: 'git-commit' }, component: BreakpointComponent, resolve: { route: RouteResolver } },
    { path: 'color', data: { icon: 'droplet' }, component: ColorComponent, resolve: { route: RouteResolver } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
