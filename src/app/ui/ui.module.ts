import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
    declarations: [
        UiComponent,
        IconComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UiModule { }
