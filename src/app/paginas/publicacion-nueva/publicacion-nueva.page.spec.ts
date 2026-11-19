import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicacionNuevaPage } from './publicacion-nueva.page';

describe('PublicacionNuevaPage', () => {
  let component: PublicacionNuevaPage;
  let fixture: ComponentFixture<PublicacionNuevaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
