import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Observable, merge } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { EventBusService } from 'src/app/event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  public contacts$: Observable<Array<Contact>>;
  public terms$ = new Subject<string>();
  @Output() title = new EventEmitter<EventBusService>();

  constructor(private contactsService: ContactsService, private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.emit('appTitleChange', 'Content');

    console.log('contact-list');
    // this.contacts$ = merge(
    //   this.terms$.pipe(
    //     debounceTime(400),
    //     distinctUntilChanged(),
    //     switchMap(term => this.contactsService.search(term))
    //   ),
    //   this.contactsService.getContacts()
    // );

    this.contacts$ = this.terms$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        startWith(''),
        switchMap(term => this.contactsService.search(term))
    );

  }

  public trackByContactId(index: number, contact: Contact) {
    return contact.id;
  }

}
