import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = [
    'assets/gallery/1.jpg',
    'assets/gallery/2.jpg',
    'assets/gallery/3.jpg',
 
  ];
}
