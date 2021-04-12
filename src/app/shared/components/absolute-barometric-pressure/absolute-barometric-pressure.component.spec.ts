import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsoluteBarometricPressureComponent } from './absolute-barometric-pressure.component';

describe('AbsoluteBarometricPressureComponent', () => {
  let component: AbsoluteBarometricPressureComponent;
  let fixture: ComponentFixture<AbsoluteBarometricPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsoluteBarometricPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsoluteBarometricPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
