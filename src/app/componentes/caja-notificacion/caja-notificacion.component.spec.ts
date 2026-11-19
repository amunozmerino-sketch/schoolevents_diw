import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaNotificacionComponent } from './caja-notificacion.component';

describe('CajaNotificacionComponent', () => {
  let component: CajaNotificacionComponent;
  let fixture: ComponentFixture<CajaNotificacionComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
