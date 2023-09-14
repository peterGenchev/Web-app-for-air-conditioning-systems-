import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AirConditioner } from 'src/app/airConditioner';
import { AirConditionerService } from '../air-conditioner-detail/air-conditioner-service.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  airConditioners: AirConditioner[];
  

  constructor(private acService: AirConditionerService, private router: Router) {
    // Fetch your air conditioners data from the service
    this.airConditioners = acService.getAllAirConditioners();
  }

  showDetails(airConditioner: AirConditioner) {
    // Redirect to the detail page with the selected air conditioner's data
    // You can use Angular Router to navigate to the detail page
    this.router.navigate(['/air-conditioners', airConditioner.id]);
  }
  filteredAirConditioners: AirConditioner[] = [];
  selectedBrand: string | null = null; // Track selected brand

  // Function to filter by brand
  filterByBrand(name: string) {
    this.selectedBrand = name; // Set the selected brand
    this.filteredAirConditioners = this.airConditioners.filter(ac => ac.name === name);
  }

  // Function to clear brand filter and show all products
  showAllProducts() {
    this.selectedBrand = null; // Clear the selected brand
    this.filteredAirConditioners = this.airConditioners;
  }
}
