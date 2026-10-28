import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcioPage } from './ocio.page';

describe('OcioPage', () => {
  let component: OcioPage;
  let fixture: ComponentFixture<OcioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OcioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
