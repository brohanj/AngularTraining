import { Component, OnInit } from '@angular/core';
// import { MatToolbar } from '@angular/material';
// import { Contact } from 'src/app/models/contact';
// import { CONTACT_DATA } from 'src/app/data/contact-data';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  // contacts = CONTACT_DATA;
  // contacts: Contact[] = CONTACT_DATA;
  // contacts: Array<Contact> = CONTACT_DATA;
  // public contacts;

  title = 'Angular Master Class';

  //  c1 = {
  //   id: 6,
  //   name: 'Diana Ellis',
  //   email: '',
  //   phone: '',
  //   birthday: '',
  //   website: '',
  //   image: '/assets/images/6.jpg',
  //   address: {
  //     street: '6554 park lane',
  //     zip: '43378',
  //     city: 'Rush',
  //     country: 'United States'
  //   }
  // };

  /**
   *
   */
  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    // this.contacts = this.contactsService.getContacts();
  }

  // refreshData() {
  //   this.contacts = CONTACT_DATA.map(contact => ({ ...contact }));
  // }

  // public trackById(index: number, contact: Contact) {
  //     return contact.id;
  // }
}
