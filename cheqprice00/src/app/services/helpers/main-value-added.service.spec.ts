import { TestBed } from '@angular/core/testing';

import { MainValueAddedService } from './main-value-added.service';

describe('MainValueAddedService', () => {
  let service: MainValueAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainValueAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
