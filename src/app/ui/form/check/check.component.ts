import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    submit(form) {
        if (!form.valid) return console.log('invalid');
        console.log('submit', form.value);
    }

}
