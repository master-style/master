import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { IconComponent } from './icon/icon.component';
import { ColorComponent } from './color/color.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';

@NgModule({
    declarations: [
        UiComponent,
        IconComponent,
        ColorComponent,
        BreakpointComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UiModule { }
