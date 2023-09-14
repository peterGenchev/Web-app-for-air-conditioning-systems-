import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { AirConditionerDetailComponent } from './components/air-conditioner-detail/air-conditioner-detail.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'air-conditioners/:id', component: AirConditionerDetailComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
