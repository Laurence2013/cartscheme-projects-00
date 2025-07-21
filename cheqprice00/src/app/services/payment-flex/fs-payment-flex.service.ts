import { Injectable, NgZone } from '@angular/core';
import { Firestore, DocumentData } from '@angular/fire/firestore';

import { EMPTY, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { FsMainQuery02Service } from '../../services/helpers/fs-main-query02.service';

@Injectable({providedIn: 'root'})
export class FsPaymentFlexService {

  public constructor(
    private ngZone: NgZone, 
    private firestore: Firestore, 
    private fsMainQueryService: FsMainQuery02Service
  ){}
  public getFsValueAdded(collectionName: string, documentType: string): Observable<DocumentData[]> {
    const test00$ = this.fsMainQueryService.getValueAdded00(collectionName, documentType).pipe(
      map((data00: any) => data00.map((data01: any) => Object.keys(data01).forEach(data02 => {
        if(data02 === 'bnpl_info'){
          const test00 = data01.bnpl_info.forEach((data02: any) => console.log(data02.id));
          return test00;
        }
      }))),
    );
    test00$.subscribe();
    return EMPTY;
  }
}
