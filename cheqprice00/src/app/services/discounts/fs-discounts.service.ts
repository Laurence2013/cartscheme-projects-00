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
export class FsDiscountsService {

  public myCollectObjs00$!: Observable<DocumentData>;

  public constructor(private ngZone: NgZone, private firestore: Firestore, private loadingService: LoadingService){}
  public getDiscounts01(collectionName: string, documentType: string): Observable<DocumentData[]> {
    const test00$: Observable<CollectionReference<DocumentData>> = this.getDiscountParentID00().pipe(
      switchMap(val00 => of(val00[0]['id']).pipe(
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
  private getDiscountParentID00(): Observable<DocumentData[]> {
    const myCollectObjs00: CollectionReference<any> = collection(this.firestore, 'discounts');
    return from(getDocs(myCollectObjs00)).pipe(
      map((data00: QuerySnapshot<DocumentData>) => {
        const discounts: DocumentData[] = [];
        data00.forEach(doc => discounts.push({id: doc.id}));
        return discounts;
      })
    );
  }
}
