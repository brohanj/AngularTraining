import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import {FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { API_ENDPOINT } from 'src/app/app.token';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { EventBusService } from 'src/app/event-bus.service';
import { ContactsActions } from './state/contacts/contacts.actions';

import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from 'src/app/state/app.state';


@NgModule({
  providers: [
    ContactsService ,
    EventBusService ,
    { provide: API_ENDPOINT, useValue : 'http://localhost:4201/api' } // using injection tokens
  ], // commented out because of "providedIn :root"
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabsComponent,
    TabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    // ContactsActions,
    StoreModule.forRoot(ROOT_REDUCER)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
