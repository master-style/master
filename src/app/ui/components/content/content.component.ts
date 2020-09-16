import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) { }

    items;

    ngOnInit(): void {
        this.http.get('https://api.unsplash.com/photos/random/?client_id=jlEK9DMtCtnB7hg6E6Do3sGJwDnyNWocSs4m04oZDFk&count=30')
            .subscribe((data) => {
                this.items = data;
                console.log(data);
            });
    }

}
