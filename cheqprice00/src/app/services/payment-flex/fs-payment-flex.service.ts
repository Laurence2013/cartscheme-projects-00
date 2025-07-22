import { Injectable, NgZone } from '@angular/core';
import { Firestore, DocumentData } from '@angular/fire/firestore';

import { EMPTY, Observable } from 'rxjs';
import { tap, map, take, mergeMap } from 'rxjs/operators';

import { FsMainQuery02Service } from '../../services/helpers/fs-main-query02.service';
import { FsMainQuery01Service } from '../../services/helpers/fs-main-query01.service';

@Injectable({providedIn: 'root'})
export class FsPaymentFlexService {

  public constructor(
    private ngZone: NgZone, 
    private firestore: Firestore, 
    private fsMainQuery01Service: FsMainQuery01Service,
    private fsMainQuery02Service: FsMainQuery02Service
  ){}
  public getFsPaymentFlex(collectionName: string, documentType: string): Observable<DocumentData[]> {
    const test00$ = this.fsMainQuery02Service.getValueAdded00(collectionName, documentType).pipe(
      map((data00: any) => data00.map((data01: any) => Object.keys(data01).map(data02 => {
        if(data02 === 'bnpl_info'){
          console.log(data00);
          const test01$: Observable<DocumentData> = this.fsMainQuery02Service.getColParentID00(collectionName).pipe(
            mergeMap((data03: string[]) => { 
              const test02$ = this.fsMainQuery01Service.getDocuments00(collectionName, data03[0], documentType);
              test02$.pipe(
                tap(console.log)
              ).subscribe();
              return EMPTY;
            }));
          test01$.subscribe(console.log);
          return EMPTY;
        }
        return EMPTY;
      }))));
    test00$.subscribe();
    return EMPTY;
  }
}
