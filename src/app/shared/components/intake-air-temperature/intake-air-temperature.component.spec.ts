import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeAirTemperatureComponent } from './intake-air-temperature.component';

describe('IntakeAirTemperatureComponent', () => {
  let component: IntakeAirTemperatureComponent;
  let fixture: ComponentFixture<IntakeAirTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeAirTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeAirTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
