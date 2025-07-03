import { Injectable, inject } from '@angular/core';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

import { ValueAddedService } from '../../services/value-added/value-added.service';
import { MainValueAddedService } from '../../services/helpers/main-value-added.service';

@Injectable({
  providedIn: 'root'
})
export class GetValueAddedService {

	private valueAddedService = inject(ValueAddedService);
	private mainValueAddedService = inject(MainValueAddedService);

  public constructor(){}
	public getValueAdded(): Observable<MainValueAdded00[]> {
		const getCashbacks$: Observable<Cashbacks> = this.valueAddedService.getCashbacks();
		const getLoyalty$: Observable<Loyalty> = this.valueAddedService.getLoyalty();
		const getVouchers$: Observable<Vouchers> = this.valueAddedService.getVouchers();

		const test00$ = this.mainValueAddedService.mainValueAdded(getCashbacks$, 'Cashbacks');

		const combine01$: Observable<MainValueAdded00> = getLoyalty$.pipe(
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
		const combine02$: Observable<MainValueAdded00> = getVouchers$.pipe(
			map(value_added => ({
				id: value_added.id,
				is_top_5: value_added.is_top_5,
				retail: value_added.retail,
				slug: value_added.slug,
				description: value_added.description,
				image: value_added.image,
				date: value_added.date
			})));
		//const result00$ = merge(combine01$, combine02$).pipe(toArray());	
		//const result00$ = merge(combine00$, combine01$, combine02$).pipe(toArray());	
		const result00$ = merge(test00$, combine01$, combine02$).pipe(toArray());	
		return result00$;
	}
}
