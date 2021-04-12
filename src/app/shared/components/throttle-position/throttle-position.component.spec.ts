import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottlePositionComponent } from './throttle-position.component';

describe('ThrottlePositionComponent', () => {
  let component: ThrottlePositionComponent;
  let fixture: ComponentFixture<ThrottlePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottlePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottlePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
