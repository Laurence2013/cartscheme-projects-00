import { Injectable } from '@angular/core';

import { Firestore, collection, QuerySnapshot, getDocs, DocumentData } from '@angular/fire/firestore';

import { Observable, of, iif, mergeMap, EMPTY } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';

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
	public getNestedCollection(collectionName: string){}
}
