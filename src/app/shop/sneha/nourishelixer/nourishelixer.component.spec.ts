import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NourishelixerComponent } from './nourishelixer.component';

describe('NourishelixerComponent', () => {
  let component: NourishelixerComponent;
  let fixture: ComponentFixture<NourishelixerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NourishelixerComponent]
    });
    fixture = TestBed.createComponent(NourishelixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
