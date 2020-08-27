import { Component, OnInit } from '@angular/core';
import { uiRoutes } from './ui/ui-routing.module';
import { domRoutes } from './dom/dom-routing.module';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
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
