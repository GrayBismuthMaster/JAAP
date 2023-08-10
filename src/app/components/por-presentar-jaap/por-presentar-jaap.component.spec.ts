import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPresentarJaapComponent } from './por-presentar-jaap.component';

describe('PorPresentarJaapComponent', () => {
  let component: PorPresentarJaapComponent;
  let fixture: ComponentFixture<PorPresentarJaapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorPresentarJaapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorPresentarJaapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
