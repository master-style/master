import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDirective } from './display.directive';
import { DisplayOptions, DisplayService, DISPLAY_OPTIONS } from './display.service';


@NgModule({
    declarations: [
        DisplayDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DisplayDirective
    ]
})
export class DisplayModule {
    static forRoot(options?: DisplayOptions): ModuleWithProviders<DisplayModule> {
        return {
            ngModule: DisplayModule,
            providers: [
                { provide: DISPLAY_OPTIONS, useValue: options },
                DisplayService
            ]
        };
    }
    static forChild(options?: DisplayOptions): ModuleWithProviders<DisplayModule> {
        return {
            ngModule: DisplayModule,
            providers: [
                { provide: DISPLAY_OPTIONS, useValue: options },
                DisplayService
            ]
        };
    }
}
