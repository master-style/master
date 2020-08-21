import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area/area.component';
import { BackgroundComponent } from './background/background.component';
import { BorderComponent } from './border/border.component';
import { FontComponent } from './font/font.component';
import { HoverComponent } from './hover/hover.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { RadiusComponent } from './radius/radius.component';
import { ScaleComponent } from './scale/scale.component';
import { ShadowComponent } from './shadow/shadow.component';
import { TextComponent } from './text/text.component';
import { ZIndexComponent } from './z-index/z-index.component';



@NgModule({
  declarations: [AreaComponent, BackgroundComponent, BorderComponent, FontComponent, HoverComponent, MarginComponent, PaddingComponent, RadiusComponent, ScaleComponent, ShadowComponent, TextComponent, ZIndexComponent],
  imports: [
    CommonModule
  ]
})
export class ModifiersModule { }
