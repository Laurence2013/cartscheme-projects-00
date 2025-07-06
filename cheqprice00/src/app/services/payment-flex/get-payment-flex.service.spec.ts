import { TestBed } from '@angular/core/testing';

import { GetPaymentFlexService } from './get-payment-flex.service';

describe('GetPaymentFlexService', () => {
  let service: GetPaymentFlexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPaymentFlexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
