import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Observable, merge } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  // public contacts: Array<Contact>;
  public contacts$: Observable<Array<Contact>>;
  public terms$ = new Subject<string>();
  // public searchField = new FormControl(); // formcontrol is a directive

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    // had this line originally, then switched to subscribe, then went back to this when using async pipe
    this.contacts$ = this.contactsService.getContacts();

    // this.contactsService.getContacts()
    // .subscribe(contacts => {
    //     this.contacts = contacts;
    // });

    // this.terms$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged()
    // ).subscribe(term => this.search(term));

    this.contacts$ = merge(
      this.terms$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.contactsService.search(term))
      ),
      this.contactsService.getContacts()
    );

    // this.terms$.pipe(
    //   switchMap(term => this.contactsService.search(term) ) ,
    //   merge(this.contacts$)
    // );

    // this.terms$.pipe(merge(this.contacts$));

    // this.terms$.pipe(switchMap(x => x), merge(this.contacts$));

    // this.searchField.valueChanges.subscribe(term => this.search(term));
  }

  public trackByContactId(index: number, contact: Contact) {
    return contact.id;
  }

  // public search(term: string) {
  //   this.contacts$ = this.contactsService.search(term);
  // }

}
