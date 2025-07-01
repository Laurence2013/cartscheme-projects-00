import { TestBed } from '@angular/core/testing';

import { GetValueAddedService } from './get-value-added.service';

describe('GetValueAddedService', () => {
  let service: GetValueAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetValueAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
