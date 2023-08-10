import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentadoSinAprobacionComponent } from './presentado-sin-aprobacion.component';

describe('PresentadoSinAprobacionComponent', () => {
  let component: PresentadoSinAprobacionComponent;
  let fixture: ComponentFixture<PresentadoSinAprobacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentadoSinAprobacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentadoSinAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
