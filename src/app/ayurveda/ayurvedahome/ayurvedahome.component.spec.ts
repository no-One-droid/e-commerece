import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedahomeComponent } from './ayurvedahome.component';

describe('AyurvedahomeComponent', () => {
  let component: AyurvedahomeComponent;
  let fixture: ComponentFixture<AyurvedahomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyurvedahomeComponent]
    });
    fixture = TestBed.createComponent(AyurvedahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
