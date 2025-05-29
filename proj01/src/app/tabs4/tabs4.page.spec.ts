import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tabs4Page } from './tabs4.page';

describe('Tabs4Page', () => {
  let component: Tabs4Page;
  let fixture: ComponentFixture<Tabs4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
