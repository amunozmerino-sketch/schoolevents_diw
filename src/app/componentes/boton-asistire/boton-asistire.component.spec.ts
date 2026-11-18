import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAsistireComponent } from './boton-asistire.component';

describe('BotonAsistireComponent', () => {
  let component: BotonAsistireComponent;
  let fixture: ComponentFixture<BotonAsistireComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAsistireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
