import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoshasComponent } from './doshas.component';

describe('DoshasComponent', () => {
  let component: DoshasComponent;
  let fixture: ComponentFixture<DoshasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoshasComponent]
    });
    fixture = TestBed.createComponent(DoshasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
