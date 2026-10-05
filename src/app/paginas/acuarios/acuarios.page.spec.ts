import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcuariosPage } from './acuarios.page';

describe('AcuariosPage', () => {
  let component: AcuariosPage;
  let fixture: ComponentFixture<AcuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
