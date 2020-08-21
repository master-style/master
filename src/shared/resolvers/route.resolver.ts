import { AppService } from './../../app/app.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class RouteResolver implements Resolve<any>{
    constructor(
        private appService: AppService,
        private title: Title
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        this.title.setTitle(this.appService.translation[route.routeConfig.path] + '｜Master');
    }
}
