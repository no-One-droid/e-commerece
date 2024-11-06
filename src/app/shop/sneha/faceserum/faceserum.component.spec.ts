import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceserumComponent } from './faceserum.component';

describe('FaceserumComponent', () => {
  let component: FaceserumComponent;
  let fixture: ComponentFixture<FaceserumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceserumComponent]
    });
    fixture = TestBed.createComponent(FaceserumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
