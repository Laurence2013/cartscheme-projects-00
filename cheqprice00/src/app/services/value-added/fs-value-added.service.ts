import { Injectable, NgZone } from '@angular/core';
import { Firestore, DocumentData } from '@angular/fire/firestore';

import { FsMainQuery02Service } from '../../services/helpers/fs-main-query02.service';

import { EMPTY, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FsValueAddedService {

  public constructor(
    private ngZone: NgZone, 
    private firestore: Firestore, 
    private fsMainQueryService: FsMainQuery02Service
  ){}
  public getFsValueAdded(collectionName: string, documentType: string): Observable<DocumentData[]> {
    return this.fsMainQueryService.getValueAdded00(collectionName, documentType);
  }
}
