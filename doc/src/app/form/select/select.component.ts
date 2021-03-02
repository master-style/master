import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { $ } from '@master/dom';

@Component({
    selector: 'doc-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    @ViewChild('form') formRef: ElementRef<any>;

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        $(this.formRef.nativeElement)
            .on('change', 'm-select', (event) => {
                console.log(event);
            })
    }

}
