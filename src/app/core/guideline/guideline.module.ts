import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation/installation.component';
import { CodingStyleComponent } from './coding-style/coding-style.component';



@NgModule({
    declarations: [InstallationComponent, CodingStyleComponent],
    imports: [
        CommonModule
    ]
})
export class GuidelineModule { }
