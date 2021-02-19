import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteResolver } from './shared/route.resolver';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';

import { IconComponent } from './icon/icon.component';
import { ColorComponent } from './color/color.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { BadgeComponent } from './data-renders/badge/badge.component';
import { CardComponent } from './data-renders/card/card.component';
import { ChatsComponent } from './data-renders/chats/chats.component';
import { ChipComponent } from './data-renders/chip/chip.component';
import { CollapseComponent } from './interactors/collapse/collapse.component';
import { FlowsComponent } from './data-renders/flows/flows.component';
import { InfoComponent } from './data-renders/info/info.component';
import { ListComponent } from './data-renders/list/list.component';
import { ModalComponent } from './interactors/modal/modal.component';
import { PopupComponent } from './interactors/popup/popup.component';
import { ProgressComponent } from './indicators/progress/progress.component';
import { RibbonComponent } from './data-renders/ribbon/ribbon.component';
import { TableComponent } from './data-renders/table/table.component';
import { TabsComponent } from './navigators/tabs/tabs.component';
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
import { DialogComponent } from './interactors/dialog/dialog.component';
import { RippleComponent } from './indicators/ripple/ripple.component';
import { LoadingComponent } from './indicators/loading/loading.component';
import { AnimationComponent } from './animation/animation.component';
import { FigureComponent } from './decorators/figure/figure.component';
import { ItemComponent } from './data-renders/item/item.component';
import { SkeletonComponent } from './indicators/skeleton/skeleton.component';
import { BreadcrumbComponent } from './navigators/breadcrumb/breadcrumb.component';
import { ContentComponent } from './layout/content/content.component';
import { OverlayComponent } from './layout/overlay/overlay.component';

import { FormComponent } from './form/form.component';
import { ButtonComponent } from './form/button/button.component';
import { InputComponent } from './form/input/input.component';
import { SelectComponent } from './form/select/select.component';
import { TextareaComponent } from './form/textarea/textarea.component';
import { CheckComponent } from './form/check/check.component';

import { ValidationComponent } from './form/validation/validation.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EditorComponent } from './editor/editor.component';

import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';

import { DisplayModule } from '@master/angular';

@NgModule({
    declarations: [
        AppComponent,
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
        TableComponent,
        TabsComponent,
        InstallationComponent,
        DisplayComponent,
        VisibilityComponent, 
        ArticleComponent, 
        AlignmentComponent, 
        PositionComponent, 
        WrapComponent,
        AreaComponent, 
        BackgroundComponent, 
        BorderComponent, 
        FontComponent, 
        HoverComponent, 
        MarginComponent, 
        PaddingComponent, 
        RadiusComponent, 
        ScaleComponent, 
        ShadowComponent, 
        TextComponent, 
        ZIndexComponent,
        DialogComponent,
        RippleComponent,
        LoadingComponent,
        AnimationComponent,
        FigureComponent,
        ItemComponent,
        SkeletonComponent,
        BreadcrumbComponent,
        ContentComponent,
        OverlayComponent,
        ButtonComponent,
        InputComponent,
        SelectComponent,
        TextareaComponent,
        CheckComponent,
        FormComponent,
        ValidationComponent,
        HeaderComponent,
        FooterComponent,
        EditorComponent,
        OverviewComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
                deps: [HttpClient]
            }
        }),
        SharedModule,
        DisplayModule.forRoot()
    ],
    providers: [
        RouteResolver
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
