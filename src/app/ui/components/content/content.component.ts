import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators'

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
        this.http.get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=20')
            .pipe(first())
            .subscribe((data) => {
                setTimeout(() => {
                    this.items = data;
                }, 1000);
            });
    }

    more() {
        this.http.get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=20')
            .pipe(first())
            .subscribe((data) => {
                console.log('載入');
                console.log(data);
                this.items.push(data);
            });
    }

    scroll(event: CustomEvent) {
        const content: any = event.target;
        console.log(content.reachX, content.reachY);
    }

}
