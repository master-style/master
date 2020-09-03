import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doc-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}

const template = () => [
    'div', { class: 'shine', $text: '1' }, [
        'div', {
            class: 'shine',
            $text: '2'
        },
        'div', { class: 'shine', $text: '2' },
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

setTimeout(() => {
    console.time('t1');
    render1.run(template);
    console.timeEnd('t1');
}, 1000);
