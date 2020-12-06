import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor() { }

    timer;

    options = [];

    cities = ['taipei', 'hualien'];

    ngOnInit(): void {
        let i = 0;
        this.timer = setInterval(() => {
            if (i > 5) return;
            i++;
            this.options.unshift(new Date().getTime());
        }, 1000);
    }

    submit(form) {
        if (!form.valid) return console.log('invalid');
        console.log('submit', form);
    }

    masterChange(event) {
        // console.log(event, event.target.value);
    }

    nativeChange(event) {
        // console.log(event, event.target.value);
    }

    ngOnDestroy(): void {
        clearInterval(this.timer);
    }

}
