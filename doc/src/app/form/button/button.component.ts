import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    colors = ['blue', 'red', 'green', 'purple', 'yellow'];
    styles = ['filled', 'filled rounded', 'outlined', 'outlined rounded'];

    constructor() { }

    ngOnInit(): void { }
}
