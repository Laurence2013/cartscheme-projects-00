import { TestBed } from '@angular/core/testing';

import { GetDiscountService } from './get-discount.service';

describe('GetDiscountService', () => {
  let service: GetDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
