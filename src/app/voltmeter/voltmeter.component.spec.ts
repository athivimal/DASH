import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltmeterComponent } from './voltmeter.component';

describe('VoltmeterComponent', () => {
  let component: VoltmeterComponent;
  let fixture: ComponentFixture<VoltmeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltmeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
