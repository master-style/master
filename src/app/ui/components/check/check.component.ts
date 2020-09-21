import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

    value = 'female';
    nativeValue;

    colors = [
        { name: 'red' },
        { name: 'blue', checked: true }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    submit(form) {
        console.log(form.value, this.colors);
    }

}
