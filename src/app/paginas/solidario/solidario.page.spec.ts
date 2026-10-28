import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolidarioPage } from './solidario.page';

describe('SolidarioPage', () => {
  let component: SolidarioPage;
  let fixture: ComponentFixture<SolidarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
