import { TestBed } from '@angular/core/testing';

import { FsPaymentFlexService } from './fs-payment-flex.service';

describe('FsPaymentFlexService', () => {
  let service: FsPaymentFlexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsPaymentFlexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
