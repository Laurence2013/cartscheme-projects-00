import { Injectable, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

import { General } from '../../interfaces/discounts/general.interface';
import { Staff } from '../../interfaces/discounts/staff.interface';
import { MainDiscounts00 } from '../../interfaces/discounts/main-discounts00.interface';

import { DiscountsService } from './discounts.service';

@Injectable({
  providedIn: 'root'
})
export class GetDiscountService {

	private discountsService = inject(DiscountsService);

  public constructor(){}	
	public getGenDiscounts01(): Observable<MainDiscounts00[]> {
		const getDiscount$: Observable<DocumentData> = this.discountsService.getGeneralDiscounts01();
		const getStaffDiscount$: Observable<DocumentData> = this.discountsService.getStaffDiscounts01();
		const generalDiscouns$: Observable<MainDiscounts00> = getDiscount$.pipe(
			map((genDiscount: DocumentData) => ({
				id: genDiscount['id'],
				is_top_5: genDiscount['is_top_5'],
				retail: genDiscount['retail'],
				slug: genDiscount['slug'],
				offer: genDiscount['discount'],
				title: genDiscount['title'],
				link: genDiscount['link']
			})));
		const staffDiscounts$: Observable<MainDiscounts00> = getStaffDiscount$.pipe(
			map((staffDiscounts: DocumentData) => ({
				id: staffDiscounts['id'],
				is_top_5: staffDiscounts['is_top_5'],
				retail: staffDiscounts['retail'],
				slug: staffDiscounts['slug'],
				offer: staffDiscounts['offer'],
				title: staffDiscounts['title'],
				link: staffDiscounts['link']
			})));
		const result00$ = merge(generalDiscouns$, staffDiscounts$).pipe(toArray());
		return result00$;
	}
	public getGenDiscounts00(): Observable<MainDiscounts00[]> {
		const getGenDiscount$: Observable<General> = this.discountsService.getGeneralDiscounts00();
		const getStaffDiscount$: Observable<Staff> = this.discountsService.getStaffDiscounts00();
		const genDiscount$: Observable<MainDiscounts00> = getGenDiscount$.pipe(
			map(discounts => ({
				id: discounts.id,
				is_top_5: discounts.is_top_5,
				retail: discounts.retail,
				slug: discounts.slug,
				offer: discounts.discount,
				title: discounts.title,
				link: discounts.link
			})));
		const staffDiscount$: Observable<MainDiscounts00> = getStaffDiscount$.pipe(
			map(discounts => ({
				id: discounts.id,
				is_top_5: discounts.is_top_5,
				retail: discounts.retail,
				slug: discounts.slug,
				offer: discounts.discount,
				title: discounts.title,
				link: discounts.link
			})));
		const result01$ = merge(staffDiscount$, genDiscount$).pipe(toArray());
		return result01$;
	}
}
