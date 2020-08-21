import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { RippleComponent } from './ripple/ripple.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [DialogComponent, RippleComponent, LoadingComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionsModule { }
