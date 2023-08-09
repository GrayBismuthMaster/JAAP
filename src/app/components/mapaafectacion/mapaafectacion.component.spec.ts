import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaafectacionComponent } from './mapaafectacion.component';

describe('MapaafectacionComponent', () => {
  let component: MapaafectacionComponent;
  let fixture: ComponentFixture<MapaafectacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaafectacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaafectacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
