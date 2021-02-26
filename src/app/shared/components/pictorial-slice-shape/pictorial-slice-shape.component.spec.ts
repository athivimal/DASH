import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialSliceShapeComponent } from './pictorial-slice-shape.component';

describe('PictorialSliceShapeComponent', () => {
  let component: PictorialSliceShapeComponent;
  let fixture: ComponentFixture<PictorialSliceShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictorialSliceShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictorialSliceShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
