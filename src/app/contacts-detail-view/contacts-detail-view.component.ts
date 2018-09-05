import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/contacts.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  // public contact$: Observable<Contact>;
  public contact: Contact;

  constructor(private route: ActivatedRoute, private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.contactsService.getContact(id)
    .subscribe(contact => {
        this.contact = contact;
    });
  }

  public navigateToEditor(contact: Contact) {
    // this.router.navigate(['/edit']);
    this.router.navigate(['/contact', contact.id, 'edit']);
  }

  public navigateToList(contact: Contact) {
    this.router.navigate(['/contact', ]);
  }

}
