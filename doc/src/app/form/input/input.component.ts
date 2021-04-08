import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    mail: string;
    files;

    constructor() { }

    ngOnInit(): void { }

    upload(event, input) {
        console.log('upload', event[0]?.name, input);
    }

}
