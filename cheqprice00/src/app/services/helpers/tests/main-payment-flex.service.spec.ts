import { TestBed } from '@angular/core/testing';

import { MainPaymentFlexService } from './main-payment-flex.service';

describe('MainPaymentFlexService', () => {
  let service: MainPaymentFlexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPaymentFlexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
