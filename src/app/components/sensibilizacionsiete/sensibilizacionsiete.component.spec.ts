import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizacionsieteComponent } from './sensibilizacionsiete.component';

describe('SensibilizacionsieteComponent', () => {
  let component: SensibilizacionsieteComponent;
  let fixture: ComponentFixture<SensibilizacionsieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizacionsieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizacionsieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
