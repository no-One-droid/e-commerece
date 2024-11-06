import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingconctComponent } from './healingconct.component';

describe('HealingconctComponent', () => {
  let component: HealingconctComponent;
  let fixture: ComponentFixture<HealingconctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealingconctComponent]
    });
    fixture = TestBed.createComponent(HealingconctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
