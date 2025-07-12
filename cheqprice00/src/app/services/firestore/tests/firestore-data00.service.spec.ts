import { TestBed } from '@angular/core/testing';

import { FirestoreData00Service } from './firestore-data00.service';

describe('FirestoreData00Service', () => {
  let service: FirestoreData00Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreData00Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
