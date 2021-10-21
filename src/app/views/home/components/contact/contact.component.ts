import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailStatus } from 'src/app/enums/email-status.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: '',
  };
  emailStatus: EmailStatus = EmailStatus.INITIAL;
  EmailStatus = EmailStatus;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    const body = {
      senderName: this.contact.name,
      senderEmail: this.contact.email,
      message: this.contact.message,
    };

    this.emailStatus = EmailStatus.PENDING;
    this.http
      .post(`${environment.backendUrl}/api/mails/send-mail`, body)
      .toPromise()
      .then((_) => {
        console.log('Successfully sent email');
        this.emailStatus = EmailStatus.SUCCESS;
      })
      .catch((err) => {
        console.error(err);
        this.emailStatus = EmailStatus.ERROR;
      });
  }
}
