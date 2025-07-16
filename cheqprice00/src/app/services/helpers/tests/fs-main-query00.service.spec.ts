import { TestBed } from '@angular/core/testing';

import { FsMainQuery00Service } from './fs-main-query00.service';

describe('FsMainQuery00Service', () => {
  let service: FsMainQuery00Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsMainQuery00Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
