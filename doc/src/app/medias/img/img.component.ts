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
    
    images = [
        'https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.6435-9/199774446_4093036097441665_7431264905353957546_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=W1i9GgF2dqwAX-Lqszb&_nc_oc=AQmjOp1RXQB8LQu3JWKH-6UK8iy_UO1v-Bf2_U4S5czdOLLhUAIyYld8CDTapt4CLrg&_nc_ht=scontent.ftpe7-2.fna&oh=7bc3dea1b50b78adfecf2d7c43782331&oe=60EE0854',
        'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/200465074_4093036174108324_7241917752695393343_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=TRlFnBhAKEgAX_gJndV&_nc_ht=scontent.ftpe7-1.fna&oh=ad907b3f7666a15618c0b45a8f5a62d3&oe=60ED995B',
        'https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.6435-9/200627648_4093036247441650_4905393667875217067_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_ohc=8uXQ0ukF2JsAX807Gk_&_nc_ht=scontent.ftpe7-2.fna&oh=6ea95ed52ee0de53b40d14150d3b85e3&oe=60EEB569'
    ]

    ngOnInit(): void {
        // this.http.get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=30')
        //     .pipe(first())
        //     .subscribe((data) => {
        //         this.data = data;
        //         console.log(data);
        //     });
    }

}
