import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentFlexPage } from './payment-flex.page';

describe('PaymentFlexPage', () => {
  let component: PaymentFlexPage;
  let fixture: ComponentFixture<PaymentFlexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFlexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
