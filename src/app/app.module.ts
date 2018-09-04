import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';


@NgModule({
  // providers: [ContactsService], // commented out because of "providedIn :root"
  declarations: [ContactsAppComponent, ContactsListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
