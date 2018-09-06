import { Component, OnInit } from '@angular/core';
// import { MatToolbar } from '@angular/material';
// import { Contact } from 'src/app/models/contact';
// import { CONTACT_DATA } from 'src/app/data/contact-data';
import { ContactsService } from './contacts.service';
import { EventBusService } from 'src/app/event-bus.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {

  title = 'Angular Master Class';

  /**
   *
   */
  constructor(private contactsService: ContactsService, private eventBus: EventBusService) {
  }

  ngOnInit() {
    // this.contacts = this.contactsService.getContacts();
    this.eventBus.observe('appTitleChange')
                 .subscribe(title => this.title = title);
  }

}
