import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoEditarPage } from './evento-editar.page';

describe('EventoEditarPage', () => {
  let component: EventoEditarPage;
  let fixture: ComponentFixture<EventoEditarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
