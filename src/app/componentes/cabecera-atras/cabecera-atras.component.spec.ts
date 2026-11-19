import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraAtrasComponent } from './cabecera-atras.component';

describe('CabeceraAtrasComponent', () => {
  let component: CabeceraAtrasComponent;
  let fixture: ComponentFixture<CabeceraAtrasComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraAtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
