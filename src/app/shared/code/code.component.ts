import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

    constructor(
        public template: TemplateRef<any>
    ) {
        console.log(this.template);
    }

    ngOnInit(): void {
        console.log(this.template);
    }

    ngAfterViewInit(): void {
        console.log(this.template);
    }
}
