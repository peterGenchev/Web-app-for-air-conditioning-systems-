import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirConditionerDetailComponent } from './air-conditioner-detail.component';

describe('AirConditionerDetailComponent', () => {
  let component: AirConditionerDetailComponent;
  let fixture: ComponentFixture<AirConditionerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirConditionerDetailComponent]
    });
    fixture = TestBed.createComponent(AirConditionerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
