import { Injectable } from '@angular/core';
import { AirConditioner } from 'src/app/airConditioner';
import { Daikin } from '../catalog/data/daikin';
import { Kaisai } from '../catalog/data/kaisai';
import { Mitsubishi } from '../catalog/data/mitsubishi';

@Injectable({
  providedIn: 'root'
})
export class AirConditionerService {

  private airConditioners: AirConditioner[] = []
  constructor() {}

  // Method to get all air conditioners
  getAllAirConditioners(): AirConditioner[] {
    return this.airConditioners= [...Daikin, ...Kaisai,...Mitsubishi];
  }

  // Method to get a specific air conditioner by ID
  getAirConditionerById(id: number): AirConditioner | undefined {
    return this.airConditioners.find((ac) => ac.id === id);
  }
}
