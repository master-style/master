import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) { }

    data;

    ngOnInit(): void {
        this.http.get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=30')
            .pipe(first())
            .subscribe((data) => {
                this.data = data;
                console.log(data);
            });
    }

}
