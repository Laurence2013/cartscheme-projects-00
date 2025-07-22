import { Injectable, NgZone } from '@angular/core';
import { Firestore, DocumentData } from '@angular/fire/firestore';

import { EMPTY, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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
  public getFsValueAdded(collectionName: string, documentType: string): Observable<DocumentData[]> {
    const test00$ = this.fsMainQuery02Service.getValueAdded00(collectionName, documentType).pipe(
      map((data00: any) => data00.map((data01: any) => Object.keys(data01).forEach(data02 => {
        if(data02 === 'bnpl_info'){
          const bnpl_id: Array<string> = [];
          const test00 = data01.bnpl_info.forEach((data02: any) => bnpl_id.push(data02.id));
          console.log(bnpl_id);
          return bnpl_id;
        }else{
          return EMPTY;
        }
      }))),
      tap(data02 => console.log(data02))
    );
    test00$.subscribe();
    return EMPTY;
  }
}
