import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { PhotosComponent } from './photos/photos.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WeddingComponent,
    PhotosComponent,
    GiftsComponent,
    RsvpComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
