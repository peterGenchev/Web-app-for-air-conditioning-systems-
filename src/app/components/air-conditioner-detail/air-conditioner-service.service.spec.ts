import { TestBed } from '@angular/core/testing';

import { AirConditionerServiceService } from './air-conditioner-service.service';

describe('AirConditionerServiceService', () => {
  let service: AirConditionerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirConditionerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
