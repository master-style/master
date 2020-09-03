import { Component, OnInit, Input, ViewChild } from '@angular/core';

import camelToKebabCase from '@utils/camel-to-kebab-case';

@Component({
    selector: 'doc-prop',
    templateUrl: './prop.component.html',
    styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

    @Input() name: string;
    @Input() types: [];
    @Input() description: string;

    camelToKebabCase = camelToKebabCase;

    constructor() { }

    ngOnInit(): void {}

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
            case undefined:
                return 'undefined';
            default:
                return "'" + value + "'";
        }
    }

}
