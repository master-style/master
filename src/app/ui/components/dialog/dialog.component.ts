import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

        const obs = this.http
            .get('https://api.unsplash.com/photos/random/?client_id=yY6EAfiInBb_-KFF8QG7C1jg6bMAxfdK6MkZwqHnkjk&count=10')

        $.dialog({
            title: 'Created',
            text: 'The user has been created by Aron.',
            type: 'success',
            acceptButton: {
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
            onAccept() {
                return obs.toPromise();
            },
            onReject() { },
            async onCancel() {
                return await true;
            }
        });

    }

}
