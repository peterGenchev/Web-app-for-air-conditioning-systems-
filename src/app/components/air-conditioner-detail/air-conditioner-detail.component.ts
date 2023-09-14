import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AirConditioner } from 'src/app/airConditioner';
import { AirConditionerService } from './air-conditioner-service.service';

@Component({
  selector: 'app-air-conditioner-detail',
  templateUrl: './air-conditioner-detail.component.html',
  styleUrls: ['./air-conditioner-detail.component.css']
})
export class AirConditionerDetailComponent {
  selectedAirConditioner: AirConditioner | undefined; // Declare the selectedAirConditioner property with a type union

  constructor(private route: ActivatedRoute, private acService: AirConditionerService) {}

  ngOnInit() {
    // Retrieve the air conditioner ID from the route parameter
    const idParam = this.route.snapshot.paramMap.get('id');
  
    // Check if idParam is null or undefined before converting it to a number
    if (idParam !== null && idParam !== undefined) {
      const id = +idParam;
  
      // Use the ID to fetch the specific air conditioner's data
      this.selectedAirConditioner = this.acService.getAirConditionerById(id);
    } else {
      // Handle the case where 'id' is null or undefined
      // You can redirect to an error page or display a message to the user
    }
  }
}