import { Route } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const APP_ROUTES = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: 'contact/:id', component: ContactsDetailViewComponent },
  { path: '**', redirectTo: '/' }
];
