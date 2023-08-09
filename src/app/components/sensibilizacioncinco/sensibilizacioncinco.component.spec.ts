import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizacioncincoComponent } from './sensibilizacioncinco.component';

describe('SensibilizacioncincoComponent', () => {
  let component: SensibilizacioncincoComponent;
  let fixture: ComponentFixture<SensibilizacioncincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizacioncincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizacioncincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
