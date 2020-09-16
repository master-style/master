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
        this.http.get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=10')
            .subscribe((data) => {
                setTimeout(() => {
                    this.items = data;
                }, 1000);
            });
    }

}
