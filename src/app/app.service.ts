import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    translation: any;

    constructor(
        public translateService: TranslateService
    ) {
        this.translateService.onLangChange
            .subscribe((event: LangChangeEvent) => {
                this.translation = event.translations;
            });
    }

    async canActivate() {
        this.translation = await this.translateService.getTranslation('zhTW').toPromise();
        return true;
    }
}
