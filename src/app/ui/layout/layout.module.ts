import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { ArticleComponent } from './article/article.component';
import { EmbeddedComponent } from './embedded/embedded.component';
import { GridComponent } from './grid/grid.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { PositionComponent } from './position/position.component';
import { WrapComponent } from './wrap/wrap.component';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [DisplayComponent, VisibilityComponent, ArticleComponent, EmbeddedComponent, GridComponent, AlignmentComponent, PositionComponent, WrapComponent, AppComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
