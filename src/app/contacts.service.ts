import { Injectable } from '@angular/core';
import { CONTACT_DATA } from 'src/app/data/contact-data';

@Injectable({
  providedIn: 'root' // new in angular 6, means dont have to put into provider, used to make it tree shakeable
})
export class ContactsService {

  constructor() { }

  getContacts() {
    return CONTACT_DATA;
  }

  getContact(id: string) {
    return CONTACT_DATA.find(contact => contact.id.toString() === id);
  }
}
