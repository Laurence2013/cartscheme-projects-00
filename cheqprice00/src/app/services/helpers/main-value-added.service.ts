import { Injectable } from '@angular/core';

import { Observable, of, iif, mergeMap, EMPTY } from 'rxjs';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

@Injectable({
  providedIn: 'root'
})
export class MainValueAddedService {

  public constructor(){}
	public mainValueAdded01(
		getCashbacks$: Observable<Cashbacks>,
		getLoyalty$: Observable<Loyalty>,
		getVouchers$: Observable<Vouchers>,
		valueType: string): Observable<MainValueAdded00> {
			type Test00$ = Observable<Cashbacks | Loyalty | Vouchers>;

			if(valueType === 'Cashbacks'){return this.getValueAdded(getCashbacks$, valueType, this.getCashbacks)};
			if(valueType === 'Loyalty'){return this.getValueAdded(getLoyalty$, valueType, this.getLoyalty)};
			if(valueType === 'Vouchers'){return this.getValueAdded(getVouchers$, valueType, this.getVouchers)};
			return EMPTY;
	}
	private getValueAdded(
		getCashback_Loyalty_Voucher$: Observable<Cashbacks | Loyalty | Vouchers>, 
		valueType: string,
		functionType: (obs00: Observable<boolean>, obs01: Observable<any>) => Observable<MainValueAdded00>): Observable<MainValueAdded00> {
			type Test00$ = Observable<Cashbacks | Loyalty | Vouchers>;
			const test01$ = (test00$: Test00$) => test00$.pipe(map(test01 => test01.is_Type === valueType));
			const test02$ = test01$(getCashback_Loyalty_Voucher$).pipe(
				take(1),
				mergeMap((value: boolean) => iif(
					() => value === true,
					functionType(test01$(getCashback_Loyalty_Voucher$), getCashback_Loyalty_Voucher$ as Observable<any>),
					EMPTY
				)));
			return test02$;
	}
	private getLoyalty(
		test01$: Observable<boolean>, 
		getValueAdded$: Observable<Loyalty>): Observable<MainValueAdded00> {
			const combine01$: Observable<MainValueAdded00> = getValueAdded$.pipe(
				map(value_added => ({
					id: value_added.id,
					is_top_5: value_added.is_top_5,
					retail: value_added.retail,
					slug: value_added.slug,
					type01: value_added.type01,
					description: value_added.describe00,
					link: value_added.link,
					image: value_added.image,
					date: value_added.date
				})));
				const test02$ = test01$.pipe(
					take(1),
					mergeMap((test00: boolean) => iif(
						() => test00 === true,
						combine01$,
						EMPTY
					))
				);
				return test02$;
		}
	private getCashbacks(
		test01$: Observable<boolean>, 
		getValueAdded$: Observable<Cashbacks>): Observable<MainValueAdded00> {
			const combine00$: Observable<MainValueAdded00> = getValueAdded$.pipe(
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
			const test02$ = test01$.pipe(
				take(1),
				mergeMap((test00: boolean) => iif(
					() => test00 === true,
					combine00$,
					EMPTY
				))
			);
			return test02$;
	}
	private getVouchers(
		test01$: Observable<boolean>, 
		getValueAdded$: Observable<Vouchers>): Observable<MainValueAdded00> {
			const combine02$: Observable<MainValueAdded00> = getValueAdded$.pipe(
				map(value_added => ({
					id: value_added.id,
					is_top_5: value_added.is_top_5,
					retail: value_added.retail,
					slug: value_added.slug,
					description: value_added.description,
					image: value_added.image,
					date: value_added.date
				})));
			const test02$ = test01$.pipe(
				take(1),
				mergeMap((test00: boolean) => iif(
					() => test00 === true,
					combine02$,
					EMPTY
				))
			);
			return test02$;
	}
}
