import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AirConditionerDetailComponent } from './components/air-conditioner-detail/air-conditioner-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CatalogComponent,
    ContactUsComponent,
    AboutComponent,
    GalleryComponent,
    AirConditionerDetailComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
