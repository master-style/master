import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

    constructor() { }

    passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&.]{8,32}';

    ngOnInit(): void {
    }

    submit(event) {
        console.log(event);
    }

}
