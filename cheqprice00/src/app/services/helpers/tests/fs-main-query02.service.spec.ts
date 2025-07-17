import { TestBed } from '@angular/core/testing';

import { FsMainQuery02Service } from './fs-main-query02.service';

describe('FsMainQuery02Service', () => {
  let service: FsMainQuery02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsMainQuery02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
