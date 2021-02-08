import { Component, OnInit } from '@angular/core';
import { routes } from './app-routing.module';
import { AppService } from './app.service';
import { throttle } from 'lodash-es';
import { NavigationStart, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { $ } from '@master/dom';

@Component({
    selector: 'doc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    routes = this.resolvePaths([''], routes),;
    navigating = false;
    constructor(
        public appService: AppService,
        private router: Router
    ) {
        router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.navigating = true;
            }
            if (event instanceof NavigationEnd) {
                this.navigating = false;
            }
        });

    }

    scrollDirection = 'up';
    visibleSide = window.outerWidth > 1024;
    isDark = true;

    ngOnInit(): void {
        setTimeout(() => {
            let lastScrollTop = 0;
            $(window).on('scroll', throttle(() => {
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

        const clock = document.getElementById('clock');

        if (clock) {

            const day = {
                0: '星期日',
                1: '星期一',
                2: '星期二',
                3: '星期三',
                4: '星期四',
                5: '星期五',
                6: '星期六'
            };
            const prefix0 = (num) => {
                return num < 10 ? '0' + num : num;
            };
            const getTime = () => {
                const date = new Date();
                const h = date.getHours();
                return `
            ${day[date.getDay()]}
            ${h >= 12 ? '下午' : '上午'}
            ${h}:${prefix0(date.getMinutes())}:${prefix0(date.getSeconds())}
            , ${date.getMonth() + 1} 月 ${prefix0(date.getDate() + 1)} 日
        `;
            }
            clock.textContent = getTime();
            setInterval(() => {
                const date = new Date();
                clock.textContent = getTime();
            }, 1000);
        }

        const prefersDark: any = window.matchMedia('(prefers-color-scheme: dark)');
        this.toggleTheme(JSON.parse(localStorage['isDark']) ?? prefersDark.matches);

        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addListener((e) => this.toggleTheme(e.matches));
        // Called by the media query to check/uncheck the toggle

    }

    toggleTheme(isDark) {
        this.isDark = isDark;
        $(document.documentElement).toggleClass('dark', isDark);
        localStorage.isDark = isDark;
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
