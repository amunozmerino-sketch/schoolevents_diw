import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAsistenciaDetallePage } from './lista-asistencia-detalle.page';

describe('ListaAsistenciaDetallePage', () => {
  let component: ListaAsistenciaDetallePage;
  let fixture: ComponentFixture<ListaAsistenciaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAsistenciaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
