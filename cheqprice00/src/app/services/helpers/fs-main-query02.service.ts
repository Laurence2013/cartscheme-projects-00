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
export class FsMainQuery00Service {

  public constructor(
    private ngZone: NgZone, 
    private firestore: Firestore, 
    private loadingService: LoadingService){}
  public getFsCollections00(collectionName: string, documentType: string): Observable<DocumentData[]> {
    return this.getCollectionParentId00(collectionName).pipe(
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
  private getCollectionParentId00(collectionName: string): Observable<DocumentData[]> {
    const myCollectObjs00 = collection(this.firestore, collectionName);
    return collectionData(myCollectObjs00, { idField: 'id' }).pipe(
      take(1),
      map((discounts: DocumentData[]) => {
        return discounts.map(doc => ({ id: doc['id'] }));
      }));
  }
}
