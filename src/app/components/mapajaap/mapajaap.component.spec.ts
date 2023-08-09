import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaJaapComponent } from './mapajaap.component';

describe('MapaJaapComponent', () => {
  let component: MapaJaapComponent;
  let fixture: ComponentFixture<MapaJaapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaJaapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaJaapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
