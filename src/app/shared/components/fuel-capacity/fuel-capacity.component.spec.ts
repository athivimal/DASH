import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCapacityComponent } from './fuel-capacity.component';

describe('FuelCapacityComponent', () => {
  let component: FuelCapacityComponent;
  let fixture: ComponentFixture<FuelCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
