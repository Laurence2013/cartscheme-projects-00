import { Injectable, NgZone } from '@angular/core';
import { Firestore, CollectionReference, collection, collectionData } from '@angular/fire/firestore';

import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreData00Service {

  public myCollectObjs00$!: Observable<any[]>;

  public constructor(private firestore: Firestore, private ngZone: NgZone){}
  public getCollection00(): Observable<any> {
    const myCollectRef00$: CollectionReference<any> = collection(this.firestore, 'collection00');
    return this.myCollectObjs00$ = collectionData(myCollectRef00$);
  }
  public getCollection01(): Observable<any> {
    return this.ngZone.run(() => {
      const myCollectRef00$: CollectionReference<any> = collection(this.firestore, 'collection00');
      return this.myCollectObjs00$ = collectionData(myCollectRef00$);
    });
  }
}
