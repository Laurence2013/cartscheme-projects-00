import { TestBed } from '@angular/core/testing';

import { FsOffersService } from './fs-offers.service';

describe('FsOffersService', () => {
  let service: FsOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
