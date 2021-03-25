import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFlowRateComponent } from './air-flow-rate.component';

describe('AirFlowRateComponent', () => {
  let component: AirFlowRateComponent;
  let fixture: ComponentFixture<AirFlowRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFlowRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFlowRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
