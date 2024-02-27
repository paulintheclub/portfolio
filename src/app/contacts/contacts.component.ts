// contacts.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
    emailData = {
        to: '',
        subject: '',
        text: ''
    };

    constructor(private http: HttpClient) {}

    sendEmail() {
        this.http.post('http://localhost:3000/sendmail', this.emailData)
            .subscribe(
                response => console.log('Email sent successfully', response),
                error => console.error('Error sending email', error)
            );
    }

}
