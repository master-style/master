import { Component, OnInit, Input, ViewChild } from '@angular/core';

import camelToKebabCase from '../../utils/camel-to-kebab-case';

@Component({
    selector: 'doc-prop',
    templateUrl: './prop.component.html',
    styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

    @Input() name: string;
    @Input() attr: string;
    @Input() types: [];
    @Input() default: any;
    @Input() description: string;
    @Input() readonly: boolean;
    @Input() auto: boolean;
    @Input() activated: string;

    camelToKebabCase = camelToKebabCase;

    constructor() { }

    ngOnInit(): void { }

    getTypeIcon(value) {
        switch (value) {
            case true:
            case false:
            case 'boolean':
                return 'toggle-outline';
            case 'string':
                return 'text-outline';
            case 'object':
                return 'cube-outline';
            case 'function':
                return 'repeat-outline';
            case 'number':
                if (this.name === 'type') {
                    return 'text-outline';
                }
                return 'calculator-outline';
            case 'array':
                return 'list-outline';
            default:
                return 'text-outline';
        }
    }

    parsedStr(value) {
        switch (value) {
            case 'boolean':
            case 'string':
            case 'object':
            case 'function':
            case 'array':
            case 'number':
            case 'Auto':
                if (this.name === 'type') {
                    value = "'" + value + "'";
                }
                return value;
            case null:
                return 'null';
            case undefined:
                return 'undefined';
            case true:
            case false:
                return value;
            default:
                return "'" + value + "'";
        }
    }

}
