import { AppService } from './../../app/app.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteResolver implements Resolve<any>{
    constructor(
        private appService: AppService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        this.appService.currentPath = route.routeConfig.path;
    }
}
