import { TestBed } from '@angular/core/testing';

import { FsDiscountsService } from './fs-discounts.service';

describe('FsDiscountsService', () => {
  let service: FsDiscountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsDiscountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
