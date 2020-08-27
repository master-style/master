import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    translation: any;
    _currentPath: string;

    constructor(
        public translateService: TranslateService,
        private title: Title
    ) {
        this.translateService.use('zhTW');
        this.translateService.onLangChange
            .subscribe((event: LangChangeEvent) => {
                this.translation = event.translations;
                if (this._currentPath)
                    this.currentPath = this._currentPath;
            });
    }

    set currentPath(path: string) {
        this._currentPath = path;
        this.title.setTitle((this.translation?.[path] ?? path) + '｜Master');
    }

}
