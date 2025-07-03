import { Injectable } from '@angular/core';

import { Observable, of, iif, mergeMap } from 'rxjs';
import { tap, map, pluck } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

@Injectable({
  providedIn: 'root'
})
export class MainValueAddedService {

  public constructor(){}
  public mainValueAdded(getDiscount$: Observable<Cashbacks | Loyalty | Vouchers>, is_type: string): Observable<MainValueAdded00> {
		type Test00$ = Observable<Cashbacks | Loyalty | Vouchers>;

		const combine00$: Observable<MainValueAdded00> = getDiscount$.pipe(
			map((discount: MainValueAdded00) => ({
				id: discount.id,
				is_top_5: discount.is_top_5,
				retail: discount.retail,
				slug: discount.slug,
				partner_site: discount?.partner_site,
				link: discount?.link,
				image: discount.image,
				date: discount.date
			})));
		const test01$ = (test00$: Test00$) => test00$.pipe(map(test01 => test01.is_Type === is_type));
		const test02$ = test01$(getDiscount$).pipe(
			mergeMap((test00: boolean) => iif(
				() => test00 === true,
				combine00$,
				of(false)
			))
		);
		return combine00$;
	}
}
