import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadronusuariosComponent } from './padronusuarios.component';

describe('PadronusuariosComponent', () => {
  let component: PadronusuariosComponent;
  let fixture: ComponentFixture<PadronusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadronusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadronusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
