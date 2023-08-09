import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaapsComponent } from './jaaps.component';

describe('JaapsComponent', () => {
  let component: JaapsComponent;
  let fixture: ComponentFixture<JaapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
