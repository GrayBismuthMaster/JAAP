import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanojuntaComponent } from './planojunta.component';

describe('PlanojuntaComponent', () => {
  let component: PlanojuntaComponent;
  let fixture: ComponentFixture<PlanojuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanojuntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanojuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
