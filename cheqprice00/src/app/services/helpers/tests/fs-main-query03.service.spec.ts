import { TestBed } from '@angular/core/testing';

import { FsMainQuery03Service } from './fs-main-query03.service';

describe('FsMainQuery03Service', () => {
  let service: FsMainQuery03Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsMainQuery03Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
