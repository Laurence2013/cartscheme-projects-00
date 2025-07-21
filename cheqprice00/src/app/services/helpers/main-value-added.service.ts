import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, of, iif, mergeMap, EMPTY } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

import { FsMainQuery01Service } from './fs-main-query01.service';

@Injectable({providedIn: 'root'})
export class MainValueAddedService {

  public constructor(private fsMainQuery01Service: FsMainQuery01Service){}
	public mainValueAdded02(
		getValueAdded$: Observable<DocumentData>,
		valueType: string): Observable<MainValueAdded00> {
			if(valueType === 'Cashbacks'){
				return this.getValueAdded(getValueAdded$, valueType, this.getCashbacks, this.fsMainQuery01Service.get_IIF)};
			if(valueType === 'Loyalty'){
				return this.getValueAdded(getValueAdded$, valueType, this.getLoyalty, this.fsMainQuery01Service.get_IIF)};
			if(valueType === 'Vouchers'){
				return this.getValueAdded(getValueAdded$, valueType, this.getVouchers, this.fsMainQuery01Service.get_IIF)};
			return EMPTY;
	}
	private getValueAdded(
		getCashback_Loyalty_Voucher$: Observable<DocumentData>, 
		valueType: string,
		functionType: (obs00: Observable<boolean>, obs01: Observable<any>) => Observable<MainValueAdded00>,
		get_iif$: (obs02: Observable<boolean>, obs03: Observable<any>) => Observable<any>): Observable<MainValueAdded00> {
    const test01$ = (test00$: Observable<DocumentData>) => test00$.pipe(map(test01 => test01['is_Type'] === valueType));
    const test02$ = test01$(getCashback_Loyalty_Voucher$).pipe(
      take(1),
      mergeMap((value: boolean) => iif(
        () => value === true,
        functionType(test01$(getCashback_Loyalty_Voucher$), getCashback_Loyalty_Voucher$ as Observable<DocumentData>),
        EMPTY
      )));
    const test03$ = get_iif$(test01$(getCashback_Loyalty_Voucher$),test02$) as Observable<MainValueAdded00>;
    return test03$;
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
				return combine01$;
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
			return combine00$;
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
			return combine02$;
	}
}
