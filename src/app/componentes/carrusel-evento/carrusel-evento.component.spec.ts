import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselEventoComponent } from './carrusel-evento.component';

describe('CarruselEventoComponent', () => {
  let component: CarruselEventoComponent;
  let fixture: ComponentFixture<CarruselEventoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
