import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValueAddedPage } from './value-added.page';

describe('ValueAddedPage', () => {
  let component: ValueAddedPage;
  let fixture: ComponentFixture<ValueAddedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
