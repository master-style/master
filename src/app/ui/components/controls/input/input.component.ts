import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    constructor() { }

    sizes: ['xs', 'sm', '', 'lg'];

    ngOnInit(): void { }

}
