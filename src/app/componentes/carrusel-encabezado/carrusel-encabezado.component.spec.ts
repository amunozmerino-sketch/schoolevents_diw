import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselEncabezadoComponent } from './carrusel-encabezado.component';

describe('CarruselEncabezadoComponent', () => {
  let component: CarruselEncabezadoComponent;
  let fixture: ComponentFixture<CarruselEncabezadoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
