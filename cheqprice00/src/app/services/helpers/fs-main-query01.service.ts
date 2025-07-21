import { Injectable } from '@angular/core';

import { Observable, of, iif, mergeMap, EMPTY } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';

import { Bnpl } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

@Injectable({providedIn: 'root'})
export class FsMainQuery01Service {

  public constructor(){}
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
	public getNestedCollection(){}
}
