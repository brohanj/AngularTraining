import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  public contacts: Array<Contact>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    // this.contacts = this.contactsService.getContacts();

    this.contactsService.getContacts()
    .subscribe(contacts => {
        this.contacts = contacts;
    });
  }

  public trackByContactId(index: number, contact: Contact) {
    return contact.id;
  }

}
