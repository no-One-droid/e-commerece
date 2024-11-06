import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightfacecleanserComponent } from './brightfacecleanser.component';

describe('BrightfacecleanserComponent', () => {
  let component: BrightfacecleanserComponent;
  let fixture: ComponentFixture<BrightfacecleanserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrightfacecleanserComponent]
    });
    fixture = TestBed.createComponent(BrightfacecleanserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
