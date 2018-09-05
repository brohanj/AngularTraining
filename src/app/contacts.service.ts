import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { CONTACT_DATA } from 'src/app/data/contact-data';
// import { HttpClient } from 'selenium-webdriver/http';
import { Contact } from 'src/app/models/contact';
import { Observable } from 'rxjs/internal/Observable';
import { API_ENDPOINT } from 'src/app/app.token';


interface ContactResponse  { item: Contact; }
interface ContactsResponse { items: Contact[]; }

@Injectable({
  providedIn: 'root' // new in angular 6, means dont have to put into provider, used to make it tree shakeable
})
export class ContactsService {
  // private API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint: string) { }

  // getContacts() {
  //   return CONTACT_DATA;
  // }
  // getContacts() {
  //   const url = 'http://myapi.com/contacts';
  //   return this.http.get<any>(url)
  //     .pipe(map((data) => data.items));
  // }

  getContacts(): Observable<Array<Contact>>  {
    // const url = `${this.API_ENDPOINT}/contacts`; // 'http://localhost:4201/api/contacts';
    const url = `${this.apiEndpoint}/contacts`; // 'http://localhost:4201/api/contacts';
    return this.http.get<ContactsResponse>(url)
      .pipe(map(data => data.items));
  }

  // getContact(id: string) {
  //   return CONTACT_DATA.find(contact => contact.id.toString() === id);
  // }
  getContact(id: string): Observable<Contact> {
    // const url = 'http://localhost:4201/api/contacts/' + id;
    // const url = `${this.API_ENDPOINT}/contacts/${id}`;
    const url = `${this.apiEndpoint}/contacts/${id}`;
    return this.http.get<ContactResponse>(url)
      .pipe(map(data => data.item));
  }

  updateContact(contact: Contact) {
    const url = `${this.apiEndpoint}/contacts/${contact.id}`;
    return this.http.put<ContactsResponse>(url, contact)
      .pipe(map(data => data.items));
  }
}
