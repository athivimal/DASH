import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineCoolantTemperatureComponent } from './engine-coolant-temperature.component';

describe('EngineCoolantTemperatureComponent', () => {
  let component: EngineCoolantTemperatureComponent;
  let fixture: ComponentFixture<EngineCoolantTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineCoolantTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineCoolantTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
