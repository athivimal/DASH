import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeManifoldAbsolutePressureComponent } from './intake-manifold-absolute-pressure.component';

describe('IntakeManifoldAbsolutePressureComponent', () => {
  let component: IntakeManifoldAbsolutePressureComponent;
  let fixture: ComponentFixture<IntakeManifoldAbsolutePressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeManifoldAbsolutePressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeManifoldAbsolutePressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
