import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriveniComponent } from './triveni.component';

describe('TriveniComponent', () => {
  let component: TriveniComponent;
  let fixture: ComponentFixture<TriveniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriveniComponent]
    });
    fixture = TestBed.createComponent(TriveniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
