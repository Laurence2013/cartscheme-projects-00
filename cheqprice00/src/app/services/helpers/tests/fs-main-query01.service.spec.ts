import { TestBed } from '@angular/core/testing';

import { FsMainQuery01Service } from './fs-main-query01.service';

describe('FsMainQuery01Service', () => {
  let service: FsMainQuery01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsMainQuery01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
