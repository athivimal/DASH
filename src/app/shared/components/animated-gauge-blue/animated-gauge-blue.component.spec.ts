import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedGaugeBlueComponent } from './animated-gauge-blue.component';

describe('AnimatedGaugeBlueComponent', () => {
  let component: AnimatedGaugeBlueComponent;
  let fixture: ComponentFixture<AnimatedGaugeBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedGaugeBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedGaugeBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
