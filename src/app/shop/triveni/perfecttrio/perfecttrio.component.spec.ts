import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfecttrioComponent } from './perfecttrio.component';

describe('PerfecttrioComponent', () => {
  let component: PerfecttrioComponent;
  let fixture: ComponentFixture<PerfecttrioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfecttrioComponent]
    });
    fixture = TestBed.createComponent(PerfecttrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
