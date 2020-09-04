import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    constructor() { }

    times = 0;
    performanceTime = 0;
    firstPerformanceTime = 0;

    items: any = [];

    tagName = 'div';

    template = $(() => {
        return [
            'div', { class: 'shine', $text: '1' },
            'div', { class: 'shine', $text: this.times, name: this.times, disabled: true },
            'div', { class: 'shine', $text: '1' }, [
                'div', { class: 'shine', $text: '2' }, () => this.items.map((item) => [
                    'div', { class: 'shine', $text: item }
                ]),
                'div', { class: 'shine', $text: '2' },
                'div', { class: 'shine', $text: '2' }, [
                    'div', { class: 'shine', $text: '3' },
                    'div', { class: 'shine', $text: '3' }, [
                        'div', { class: 'shine', $text: '4' }, [
                            'div', { class: 'shine', $text: '5' }
                        ]
                    ]
                ],
                'div', { class: 'shine', $html: '<article>love</article>' }
            ],
            this.tagName, { class: 'shine', $text: '1' }, [
                'div', { class: 'shine', $text: '2' },
            ],
            'div', { class: 'shine', $text: '1' },
            'div', { class: 'shine', $text: '1' },
            'div', { class: 'shine', $text: '1' }
        ]
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

    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.timer);
    }

}
