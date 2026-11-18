import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMeInteresaComponent } from './boton-me-interesa.component';

describe('BotonMeInteresaComponent', () => {
  let component: BotonMeInteresaComponent;
  let fixture: ComponentFixture<BotonMeInteresaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonMeInteresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
