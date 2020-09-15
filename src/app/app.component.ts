import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { uiRoutes } from './ui/ui-routing.module';
import { domRoutes } from './dom/dom-routing.module';
import { AppService } from './app.service';
import { elementRoutes } from './element/element-routing.module';
import throttle from 'lodash/throttle';

@Component({
    selector: 'doc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    routes = [];
    constructor(
        public appService: AppService
    ) {
        this.routes.push(
            ...this.resolvePaths(['ui'], uiRoutes),
            ...this.resolvePaths(['dom'], domRoutes),
            ...this.resolvePaths(['element'], elementRoutes)
        );
    }

    scrollDirection = 'up';

    ngOnInit(): void {
        setTimeout(() => {
            let lastScrollTop = 0;
            window.on('scroll', throttle(() => {
                let st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop) {
                    // downscroll code
                    this.scrollDirection = 'down';
                } else {
                    // upscroll code
                    this.scrollDirection = 'up';
                }
                lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            }, 100, { leading: false }), { passive: true });
        }, 1000);
    }

    resolvePaths(parentPaths, routes) {
        routes.map((eachRoute) => {
            eachRoute.paths = [...parentPaths];
            if (eachRoute.path)
                eachRoute.paths.push(eachRoute.path);
            if (eachRoute.children)
                this.resolvePaths(eachRoute.paths, eachRoute.children);
        });
        return routes;
    }

}
