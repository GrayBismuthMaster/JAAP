import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizacioncuatroComponent } from './sensibilizacioncuatro.component';

describe('SensibilizacioncuatroComponent', () => {
  let component: SensibilizacioncuatroComponent;
  let fixture: ComponentFixture<SensibilizacioncuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizacioncuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizacioncuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
