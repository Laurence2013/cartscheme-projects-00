import { Injectable, NgZone } from '@angular/core';
import { 
  Firestore, CollectionReference, collection, collectionData,
  QuerySnapshot, getDocs, DocumentData, query, where, Query
} from '@angular/fire/firestore';

import { General } from '../../interfaces/discounts/general.interface';

import { EMPTY, Observable, of, from } from 'rxjs';
import { tap, map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FsDiscountsService {

  private readonly GENERAL_DISCOUNT_PARENT_ID: string = 'zjG4DgasiZQVWIdqShIO';

  public myCollectObjs00$!: Observable<DocumentData>;

  public constructor(private ngZone: NgZone, private firestore: Firestore){}
  public getDiscounts01(): Observable<DocumentData[]> {
    const test00$: Observable<CollectionReference<DocumentData>> = this.getDiscountParentID00().pipe(
      switchMap(val00 => of(val00[0]['id']).pipe(
        map((gen_discount_parent_id: string) => {
          const myCollectObjs00$: CollectionReference<DocumentData> = collection(
            this.firestore, 
            'discounts',
            gen_discount_parent_id,
            'general-discount'
          );
          return myCollectObjs00$;
        }))));
    const test01$: Observable<DocumentData[]> = test00$.pipe(
      switchMap((data00: CollectionReference<DocumentData>) => from(getDocs(data00)).pipe(
        map((data00: QuerySnapshot<DocumentData>) => {
          const discounts: DocumentData[] = [];
          data00.forEach(doc => discounts.push({id: doc.id, ...doc.data()}));
          return discounts;
        }))));
    return test01$;
  }
  public getDiscounts00(): Observable<DocumentData[]> {
    const myCollectObjs00$: CollectionReference<any> = collection(
      this.firestore, 
      'discounts',
      this.GENERAL_DISCOUNT_PARENT_ID,
      'general-discount'
    );
    return from(getDocs(myCollectObjs00$)).pipe(
      map((data00: QuerySnapshot<DocumentData>) => {
        const discounts: DocumentData[] = [];
        data00.forEach(doc => discounts.push({id: doc.id, ...doc.data()}));
        return discounts;
      })
    );
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
