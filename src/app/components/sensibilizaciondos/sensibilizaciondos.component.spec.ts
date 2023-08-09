import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizaciondosComponent } from './sensibilizaciondos.component';

describe('SensibilizaciondosComponent', () => {
  let component: SensibilizaciondosComponent;
  let fixture: ComponentFixture<SensibilizaciondosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizaciondosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizaciondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
