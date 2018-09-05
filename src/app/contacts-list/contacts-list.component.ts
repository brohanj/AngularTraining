import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  // public contacts: Array<Contact>;
  public contacts$: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    // had this line originally, then switched to subscribe, then went back to this when using async pipe
    this.contacts$ = this.contactsService.getContacts();

    // this.contactsService.getContacts()
    // .subscribe(contacts => {
    //     this.contacts = contacts;
    // });
  }

  public trackByContactId(index: number, contact: Contact) {
    return contact.id;
  }

}
