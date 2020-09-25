import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    submit(form) {
        if (!form.valid) return console.log('invalid');
        console.log('submit', form);
    }

    masterChange(event) {
        console.log(event, event.target.value);
    }

    nativeChange(event) {
        console.log(event, event.target.value);
    }

}
