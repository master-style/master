import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { dialog } from '../../../../../src/interactors/dialog';

@Component({
    selector: 'doc-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit(): void {

        setTimeout(() => {

            const obs = this.http
                .get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=10')

            dialog({
                title: 'Login',
                text: 'Welcome to the Master.',
                // type: 'success',
                async onAccept(data) {
                    console.log(data);
                    if (true) {
                        await obs.toPromise();
                    } else {
                        return false;
                    }
                },
                onReject(data) { },
                async onCancel(data) {
                    return await true;
                },
                acceptButton: {
                    type: 'submit',
                    $text: 'accept',
                },
                rejectButton: {
                    $if: false,
                    $text: 'deny',
                },
                cancelButton: {
                    $if: true,
                    $text: 'cancel'
                },
                controls: [
                    'm-input', {
                        class: 'outlined x:12',
                        autofocus: true,
                        name: 'email',
                        type: 'email',
                        placeholder: 'e.g username@domain.com',
                        label: 'username',
                        'when-type-mismatch': 'type error',
                        required: true
                    },
                    'm-input', {
                        class: 'outlined x:12',
                        name: 'password',
                        type: 'password',
                        placeholder: 'password',
                        label: 'password',
                        required: true,
                        $created: (input) => {
                            input.on('input', (event) => {
                                if (event.target.value === '123') {
                                    input.error = 'error';
                                } else {
                                    input.error = '';
                                }
                            });
                        }
                    },
                    'm-input', {
                        class: 'outlined x:9',
                        name: 'verification-code',
                        type: 'text',
                        placeHolder: 'XXXXXX',
                        required: true,
                    },
                    'm-select', {
                        class: 'outlined x:12',
                        name: 'code',
                        placeholder: '輸入手機區碼',
                        label: 'code',
                        required: true
                    }, [
                        'm-option', {
                            $text: 123,
                            value: 123
                        }
                    ],
                    'm-button', {
                        class: 'x:12 filled',
                        $text: 'facebook',
                        $css: {
                            '--bg-color': '#4267B2',
                            '--f-color': '#fff'
                        }
                    }, [
                        'ion-icon', {
                            class: 'abs left',
                            part: 'head',
                            name: 'logo-facebook'
                        }
                    ],
                    'm-button', {
                        class: 'x:12 filled',
                        $text: 'google',
                        $css: {
                            '--bg-color': '#DB4437',
                            '--f-color': '#fff'
                        }
                    }, [
                        'ion-icon', {
                            class: 'abs left',
                            part: 'head',
                            name: 'logo-google'
                        }
                    ]
                ]
            });

        }, 300);
    }

}
