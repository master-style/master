import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteResolver implements Resolve<any>{
    constructor() { }

    resolve(route: ActivatedRouteSnapshot) {
        console.log(route);

    }
}
