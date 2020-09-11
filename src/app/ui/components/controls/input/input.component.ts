import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'doc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    constructor() { }

    value = 1;

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
    }

    onInput() {
        console.log('input');
    }

}
