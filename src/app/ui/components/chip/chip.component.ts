import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

    colors = ['blue', 'red', 'green', 'purple', 'yellow', 'theme'];

    constructor() { }

    ngOnInit(): void {
    }

}
