import { Injectable, NgZone } from '@angular/core';
import { 
  Firestore, CollectionReference, collection, collectionData,
  QuerySnapshot, doc, getDocs, DocumentData, DocumentReference, 
  query, where, Query
} from '@angular/fire/firestore';

import { General } from '../../interfaces/discounts/general.interface';
import { LoadingService } from '../loading/loading.service';

import { EMPTY, Observable, of, from } from 'rxjs';
import { tap, map, switchMap, take, finalize } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class FsMainQuery00Service {
  public constructor(
    private ngZone: NgZone, 
    private firestore: Firestore, 
    private loadingService: LoadingService){}
  public getFsCollections00(collectionName: string, documentType: string): Observable<DocumentData[]> {
    const test00$ = this.getCollectionParentId00(collectionName).pipe(
      switchMap((parentId00: string[]) => {
        if(parentId00.length > 0){
          const parentId01 = parentId00[0];
          return this.getNestedCollections00(collectionName, parentId01, documentType);
        }else{
          return of([]);
        }
      }),
      finalize(() => this.loadingService.show())
    )
    return test00$;
  }
  private getNestedCollections00(
    collectionName: string, 
    parent_id: string, 
    documentType: string): Observable<DocumentData[]> {
      return this.ngZone.run(() => {
        const myCollectObjs00$: CollectionReference<DocumentData> = collection(
          this.firestore,
          collectionName,
          parent_id,
          documentType
        );
        return from(getDocs(myCollectObjs00$)).pipe(
          map((querySnapShot: QuerySnapshot<DocumentData>) => querySnapShot.docs.map(doc => (
            {id: doc.id, ...doc.data()}
      ))))});
  }
  private getCollectionParentId00(collectionName: string): Observable<string[]> {
    return this.ngZone.run(() => { 
      const myCollectObjs00: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
      return from(getDocs(myCollectObjs00)).pipe(
        map((data00: QuerySnapshot<DocumentData>) => data00.docs.map(doc => doc.id)))});
  }
}
