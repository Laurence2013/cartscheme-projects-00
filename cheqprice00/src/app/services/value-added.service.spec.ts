import { TestBed } from '@angular/core/testing';

import { ValueAddedService } from './value-added.service';

describe('ValueAddedService', () => {
  let service: ValueAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
