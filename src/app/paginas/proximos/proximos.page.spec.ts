import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProximosPage } from './proximos.page';

describe('ProximosPage', () => {
  let component: ProximosPage;
  let fixture: ComponentFixture<ProximosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
