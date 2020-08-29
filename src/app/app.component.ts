import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { uiRoutes } from './ui/ui-routing.module';
import { domRoutes } from './dom/dom-routing.module';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    routes = [];
    constructor(
        public appService: AppService
    ) {
        this.routes.push(...uiRoutes, ...domRoutes);
    }
    ngOnInit(): void { }
}
