import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraExperienciaComponent } from './barra-experiencia.component';

describe('BarraExperienciaComponent', () => {
  let component: BarraExperienciaComponent;
  let fixture: ComponentFixture<BarraExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
