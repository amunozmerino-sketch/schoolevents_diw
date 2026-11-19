import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselGaleriaComponent } from './carrusel-galeria.component';

describe('CarruselGaleriaComponent', () => {
  let component: CarruselGaleriaComponent;
  let fixture: ComponentFixture<CarruselGaleriaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
