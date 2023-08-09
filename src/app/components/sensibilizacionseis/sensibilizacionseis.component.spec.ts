import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizacionseisComponent } from './sensibilizacionseis.component';

describe('SensibilizacionseisComponent', () => {
  let component: SensibilizacionseisComponent;
  let fixture: ComponentFixture<SensibilizacionseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizacionseisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizacionseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
