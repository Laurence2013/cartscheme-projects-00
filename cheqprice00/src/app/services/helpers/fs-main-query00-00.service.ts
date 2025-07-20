import { Injectable, NgZone } from '@angular/core';
import { 
  Firestore, CollectionReference, collection, collectionData,
  QuerySnapshot, getDocs, DocumentData, query, where, Query
} from '@angular/fire/firestore';

import { General } from '../../interfaces/discounts/general.interface';
import { LoadingService } from '../loading/loading.service';

import { EMPTY, Observable, of, from } from 'rxjs';
import { tap, map, switchMap, take, finalize } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class FsMainQuery0000Service {

  public constructor(
    private ngZone: NgZone, 
    private firestore: Firestore, 
    private loadingService: LoadingService){}
  public getFsCollections00(collectionName: string, documentType: string): Observable<DocumentData[]> {
    const test00$: Observable<CollectionReference<DocumentData>> = this.getCollectionParentId00(collectionName).pipe(
      switchMap((val00: DocumentData) => of(val00[0]['id']).pipe(
        map((gen_discount_parent_id: string) => {
          const myCollectObjs00$: CollectionReference<DocumentData> = collection(
            this.firestore,
            collectionName,
            gen_discount_parent_id,
            documentType
          );
          return myCollectObjs00$;
        }))));
    const test01$: Observable<DocumentData[]> = test00$.pipe(
      switchMap((data00: CollectionReference<DocumentData>) => from(getDocs(data00)).pipe(
        map((data00: QuerySnapshot<DocumentData>) => {
          const discounts: DocumentData[] = [];
          data00.forEach(doc => discounts.push({id: doc.id, ...doc.data()}));
          return discounts;
        }),
        finalize(() => this.loadingService.show())
      )));
    return test01$;
  }
  private getCollectionParentId00(collectionName: string): Observable<DocumentData[]> {
    const myCollectObjs00: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
    return from(getDocs(myCollectObjs00)).pipe(
      map((data00: QuerySnapshot<DocumentData>) => {
        const discounts: DocumentData[] = [];
        data00.forEach(doc => discounts.push({id: doc.id}));
        return discounts;
      }));
  }
  public getFsCollections01(collectionName: string, documentType: string): Observable<DocumentData[]> {
    return this.getCollectionParentId01(collectionName).pipe(
      switchMap(parentDocs => {
        if(!parentDocs || parentDocs.length === 0 || !parentDocs[0]['id']) return of([]);
        const gen_discount_parent_id = parentDocs[0]['id'];
        const myCollectObjs00 = collection(
          this.firestore, 
          collectionName,
          gen_discount_parent_id,
          documentType
        );
        return collectionData(myCollectObjs00, {idField: 'id'}).pipe(
          take(1),
          finalize(() => this.ngZone.run(() => this.loadingService.show()))
        )}
      ));
  }
  private getCollectionParentId01(collectionName: string): Observable<DocumentData[]> {
    const myCollectObjs00 = collection(this.firestore, collectionName);
    return collectionData(myCollectObjs00, { idField: 'id' }).pipe(
      take(1),
      map((discounts: DocumentData[]) => {
        return discounts.map(doc => ({ id: doc['id'] }));
      }));
  }
}
