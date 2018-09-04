import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CONTACT_DATA } from 'src/app/data/contact-data';
// import { HttpClient } from 'selenium-webdriver/http';
import { Contact } from 'src/app/models/contact';
import { Observable } from 'rxjs/internal/Observable';


interface ContactResponse  { item: Contact; }
interface ContactsResponse { items: Contact[]; }

@Injectable({
  providedIn: 'root' // new in angular 6, means dont have to put into provider, used to make it tree shakeable
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  // getContacts() {
  //   return CONTACT_DATA;
  // }
  // getContacts() {
  //   const url = 'http://myapi.com/contacts';
  //   return this.http.get<any>(url)
  //     .pipe(map((data) => data.items));
  // }

  getContacts(): Observable<Array<Contact>>  {
    const url = 'http://localhost:4201/api/contacts';
    return this.http.get<ContactsResponse>(url)
      .pipe(map(data => data.items));
  }

  // getContact(id: string) {
  //   return CONTACT_DATA.find(contact => contact.id.toString() === id);
  // }
  getContact(id: string): Observable<Contact> {
    const url = 'http://localhost:4201/api/contacts/' + id;
    return this.http.get<ContactResponse>(url)
      .pipe(map(data => data.item));
  }
}
