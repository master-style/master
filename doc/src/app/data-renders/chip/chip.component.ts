import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

    colors = ['blue', 'red', 'green', 'purple', 'yellow'];
    styles = ['filled', 'filled rounded', 'outlined', 'outlined rounded'];

    constructor() { }

    ngOnInit(): void { }

}
