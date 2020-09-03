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

    ngOnInit(): void {
        const template = () => [
            'div', { class: 'shine', $text: '1' },
            'div', { class: 'shine', $text: this.times, name: this.times },
            'div', { class: 'shine', $text: '1' }, [
                'div', {
                    class: 'shine'
                },
                'div', { class: 'shine' }, () => this.items.map((item) => [
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
                'div', { class: 'shine', $text: '2', $html: '<article>love</article>' }
            ],
            'div', { class: 'shine', $text: '1' },
            'div', { class: 'shine', $text: '1' },
            'div', { class: 'shine', $text: '1' }, [
                'div', { class: 'shine', $text: '2' },
            ],
            'div', { class: 'shine', $text: '1' }
        ];

        const render1 = new Master.Render();

        const container = document.querySelector('doc-create');

        setInterval(() => {
            this.times++;
            const t1 = performance.now();
            render1.run(template, container);
            this.performanceTime = performance.now() - t1;
            if (this.times === 1) {
                this.firstPerformanceTime = this.performanceTime;
            }
            if (this.times % 4 === 0) {
                this.times = 0;
                this.items = [];
            } else {
                this.items.push(this.times);
            }
        }, 1000);

    }

}
