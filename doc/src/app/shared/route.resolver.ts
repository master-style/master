import { AppService } from '../app.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteResolver implements Resolve<any>{
    constructor(
        private appService: AppService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        this.appService.currentRoute = route;
        this.appService.updateTitle();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return route;
    }
}
