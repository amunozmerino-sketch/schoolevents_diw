import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoNuevoPage } from './evento-nuevo.page';

describe('EventoNuevoPage', () => {
  let component: EventoNuevoPage;
  let fixture: ComponentFixture<EventoNuevoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
