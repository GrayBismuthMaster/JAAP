import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizaciontresComponent } from './sensibilizaciontres.component';

describe('SensibilizaciontresComponent', () => {
  let component: SensibilizaciontresComponent;
  let fixture: ComponentFixture<SensibilizaciontresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizaciontresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizaciontresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
