import { Injectable } from '@angular/core';

import { Firestore, collection, CollectionReference, QuerySnapshot, 
	getDocs, DocumentData } from '@angular/fire/firestore';

import { Observable, of, from, iif, mergeMap, EMPTY } from 'rxjs';
import { tap, map, switchMap, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class FsMainQuery01Service {

  public constructor(private firestore: Firestore){}
	public get_IIF(test00$: Observable<boolean>, test01$: Observable<any>): Observable<boolean> {
		const test02$ = test00$.pipe(
			take(1),
			mergeMap((test00: boolean) => iif(
				() => test00 === true,
				test01$,
				of(false)
			)));
	 return test02$;
	}
	public getDocuments00(collectionName: string, parentId: string, documentType: string): Observable<DocumentData[]> {
    const myCollectObjs00$: CollectionReference<DocumentData> = collection(
      this.firestore,
      collectionName,
      parentId,
      documentType
    );
		return from(getDocs(myCollectObjs00$)).pipe(
			map((snapshot00: QuerySnapshot<DocumentData>) => {
        const bnpl: DocumentData[] = [];
        snapshot00.forEach(doc => bnpl.push({id: doc.id}));
        return bnpl;
			}));
	}
	public getDocuments01(
		collectionName: string, 
		parentId: string, 
		documentType: string, 
		nestedParentId00: string, 
		nestedDocumentType00: string): Observable<DocumentData[]> {
			return EMPTY;
		}
}
