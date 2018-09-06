import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Observable, merge } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { EventBusService } from 'src/app/event-bus.service';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/state/app.state';
import { LoadContactsSuccessAction } from 'src/app/state/contacts/contacts.actions';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  public contacts$: Observable<Array<Contact>>;
  public terms$ = new Subject<string>();
  @Output() title = new EventEmitter<EventBusService>();

  constructor(private contactsService: ContactsService, private eventBus: EventBusService, private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.eventBus.emit('appTitleChange', 'Content');

    console.log('contact-list');

    const query = (state) => state.contacts.list;
    this.contacts$ = this.store.pipe(select(query));

    this.contactsService
        .getContacts()
        .subscribe(contacts => {
          this.store.dispatch(
            new LoadContactsSuccessAction(contacts)
          );
        });
  }

  public trackByContactId(index: number, contact: Contact) {
    return contact.id;
  }

}
