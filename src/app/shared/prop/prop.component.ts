import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'doc-prop',
    templateUrl: './prop.component.html',
    styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

    @Input() types: [];
    @Input() attr: string;
    @Input() description: string;

    constructor() { }

    ngOnInit(): void {
        console.log(this.description);
    }

    getTypeIcon(value) {
        switch (value) {
            case 'boolean':
                return 'toggle-outline';
            case 'string':
                return 'text-outline';
            case 'object':
                return 'cube-outline';
            case 'function':
                return 'repeat-outline';
            case 'number':
                return 'calculator-outline';
            case 'array':
                return 'list-outline';
            default:
                return 'text-outline';
        }
    }

    getTypeString(value) {
        switch (value) {
            case 'boolean':
            case 'string':
            case 'object':
            case 'function':
            case 'array':
            case 'number':
                return value;
            default:
                return "'" + value + "'";
        }
    }

}
