import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  public contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // this.contact = this.contactsService.getContact(id);
    this.contactsService.getContact(id)
    .subscribe(contact => {
        this.contact = contact;
    });
  }

}
