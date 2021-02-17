import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    translation: any;
    _currentPath: string;
    currentRoute: ActivatedRouteSnapshot;

    constructor(
        public translateService: TranslateService,
        private title: Title
    ) {
        this.translateService.use('zhTW');
        this.translateService.onLangChange
            .subscribe((event: LangChangeEvent) => {
                this.translation = event.translations;
                this.updateTitle();
            });
    }

    updateTitle() {
        const title = this.currentRoute?.routeConfig?.path;
        if (title)
            this.title.setTitle((this.translation?.[title] ?? title) + '｜Master');
    }

}
