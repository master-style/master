import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array/array.component';
import { StringComponent } from './string/string.component';



@NgModule({
    declarations: [ArrayComponent, StringComponent],
    imports: [
        CommonModule
    ]
})
export class PrototypeExtensionModule { }
