import { TestBed } from '@angular/core/testing';

import { FsValueAddedService } from './fs-value-added.service';

describe('FsValueAddedService', () => {
  let service: FsValueAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsValueAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
