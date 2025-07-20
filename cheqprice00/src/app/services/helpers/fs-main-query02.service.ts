import { Injectable, NgZone } from '@angular/core';

import { Observable, EMPTY, from, of } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { 
  Firestore, CollectionReference, collection, collectionData,
  QuerySnapshot, getDocs, DocumentData, query, where, Query
} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class FsMainQuery02Service {

  public constructor(private ngZone: NgZone, private firestore: Firestore){}
  public getValueAdded00(collectionName: string, documentType: string): Observable<DocumentData[]> {
    if(documentType === 'cashbacks') {
      return this.getValueAdded01(collectionName, documentType, this.getColParentID00.bind(this))}
    if(documentType === 'loyalty'){
      return this.getValueAdded01(collectionName, documentType, this.getColParentID00.bind(this))}
    if(documentType === 'vouchers'){
      return this.getValueAdded01(collectionName, documentType, this.getColParentID00.bind(this))}
    return EMPTY;
  }
  private getValueAdded01(
    collectionName: string, 
    documentType: string,
    getColParentID: (collectionName: string) => Observable<string[]>): Observable<DocumentData[]> {
    const test00$: Observable<string[]> = getColParentID(collectionName);
    const test01$: Observable<DocumentData[]> = test00$.pipe(
      switchMap((data00: any) => this.getMainCollection00(collectionName, data00[0], documentType)));
    return test01$;
  }
  private getColParentID00(collectionName: string): Observable<string[]> {
      const myCollectObjs00: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
      return from(getDocs(myCollectObjs00)).pipe(
        map((data00: QuerySnapshot<DocumentData>) => data00.docs.map(doc => doc.id)));
  }
  private getMainCollection00(collectionName: string, parentId: string, documentType: string): Observable<DocumentData[]> {
    const myCollectObjs00$: CollectionReference<DocumentData> = collection(
      this.firestore,
      collectionName,
      parentId,
      documentType
    )
    const test00$: Observable<DocumentData[]> = from(getDocs(myCollectObjs00$)).pipe(
      map((data00: QuerySnapshot<DocumentData>) => {
        const discounts: DocumentData[] = [];
        data00.forEach(doc => discounts.push({id: doc.id, ...doc.data()}));
        return discounts;
      }));
    return test00$;
  }
}
