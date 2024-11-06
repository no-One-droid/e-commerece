import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalncetonerComponent } from './balncetoner.component';

describe('BalncetonerComponent', () => {
  let component: BalncetonerComponent;
  let fixture: ComponentFixture<BalncetonerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalncetonerComponent]
    });
    fixture = TestBed.createComponent(BalncetonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
