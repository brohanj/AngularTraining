import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  // public contact: Contact;
  public contact: Contact = <Contact>{ address: {}};

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // this.contact = this.contactsService.getContact(id);
    this.contactsService.getContact(id)
    .subscribe(contact => {
        this.contact = contact;
    });
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
    .subscribe(() => this.goToDetails(contact));
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id ]);
  }

}
