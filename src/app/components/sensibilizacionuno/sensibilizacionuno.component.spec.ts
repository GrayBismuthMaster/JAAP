import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilizacionunoComponent } from './sensibilizacionuno.component';

describe('SensibilizacionunoComponent', () => {
  let component: SensibilizacionunoComponent;
  let fixture: ComponentFixture<SensibilizacionunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensibilizacionunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensibilizacionunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
