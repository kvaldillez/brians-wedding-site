import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PhotosComponent } from './photos/photos.component';
import { WeddingComponent } from './wedding/wedding.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OurStoryComponent,
    PhotosComponent,
    WeddingComponent,
    GiftsComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
