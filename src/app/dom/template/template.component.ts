import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

    constructor() { }

    times = 0;
    performanceTime = 0;
    firstPerformanceTime = 0;

    items: any = [];

    tagName = 'div';

    if = false;

    template = window['Master'](() => {
        return [
            'div', { class: 'shine', $text: '1', $if: this.if },
            'div', { class: 'shine', $text: this.times, name: this.times, disabled: true },
            'div', { class: 'shine', $text: '2', $if: this.if }, [
                'div', { class: 'shine', $text: '3' }, () => this.items.map((item) => [
                    'div', { class: 'shine', $text: item }
                ]),
                'div', { class: 'shine', $text: '4' },
                'div', { class: 'shine', $text: '5' }, [
                    'div', { class: 'shine', $text: '6' },
                    'div', { class: 'shine', $text: '7' }, [
                        'div', { class: 'shine', $text: '8' }, [
                            'div', { class: 'shine', $text: '9' }
                        ]
                    ]
                ],
                'div', { class: 'shine', $html: '<article>love</article>' }
            ],
            this.tagName, { class: 'shine', $text: '10' }, [
                'div', { class: 'shine', $text: '11' },
            ],
            'div', { class: 'shine', $text: '12' },
            'div', { class: 'shine', $text: '13', $if: this.if },
            'div', { class: 'shine', $text: '14' }
        ];
    });

    timer;

    ngOnInit(): void {

        const container = document.querySelector('#create');

        this.timer = setInterval(() => {
            const t1 = performance.now();
            this.template.render(container);
            this.performanceTime = performance.now() - t1;
            if (this.times === 0) {
                this.firstPerformanceTime = this.performanceTime;
            }
            this.times++;
            if (this.times % 4 === 0) {
                this.items = [];
            } else {
                this.items.push(this.times);
            }
            if (this.tagName === 'div') {
                this.tagName = 'a';
            } else {
                this.tagName = 'div';
            }
        }, 1000);

        setTimeout(() => {
            this.if = true;
        }, 3000);

    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.timer);
    }

}
