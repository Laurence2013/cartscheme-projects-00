import { Injectable, NgZone } from '@angular/core';

import { Observable, EMPTY, from, of } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { 
  Firestore, CollectionReference, collection, collectionData,
  QuerySnapshot, getDocs, DocumentData, query, where, Query
} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class FsMainQuery02Service {

  public constructor(private ngZone: NgZone, private firestore: Firestore){}
  public getValueAdded00(collectionName: string, documentType: string){
    if(documentType === 'cashbacks') this.getCashbacks00(collectionName, documentType, this.getColParentID00.bind(this));
    if(collectionName === 'loyalty'){}
  }
  private getCashbacks00(
    collectionName: string, 
    documentType: string,
    getColParentID: (collectionName: string) => Observable<string[]>): Observable<DocumentData[]> {
    const test00$: Observable<string[]> = getColParentID(collectionName);
    test00$.subscribe();
    return EMPTY;
  }
  private getColParentID00(collectionName: string): Observable<string[]> {
      const myCollectObjs00: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
      return from(getDocs(myCollectObjs00)).pipe(
        map((data00: QuerySnapshot<DocumentData>) => data00.docs.map(doc => doc.id)),
        tap(data01 => console.log('Line 31: ', data01))
      );
  }
  private getMainCollection00(collectionName: string, parentId: string, documentType: string): DocumentData {
    const myCollectObjs00$: CollectionReference<DocumentData> = collection(
      this.firestore,
      collectionName,
      parentId,
      documentType
    )
    return EMPTY;
  }
}
