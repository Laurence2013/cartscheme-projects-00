import { TestBed } from '@angular/core/testing';

import { PaymentFlexService } from './payment-flex.service';

describe('PaymentFlexService', () => {
  let service: PaymentFlexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentFlexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
