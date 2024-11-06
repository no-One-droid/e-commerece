import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacecreamComponent } from './facecream.component';

describe('FacecreamComponent', () => {
  let component: FacecreamComponent;
  let fixture: ComponentFixture<FacecreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacecreamComponent]
    });
    fixture = TestBed.createComponent(FacecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
