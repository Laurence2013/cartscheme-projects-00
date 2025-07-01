import { Injectable, inject } from '@angular/core';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { Multibuys } from '../../interfaces/offers/multibuys.interface';
import { Occassions } from '../../interfaces/offers/occassions.interface';
import { Seasonal } from '../../interfaces/offers/seasonal.interface';
import { MainOffers01 } from '../../interfaces/offers/main-offers01.interface';

import { OffersService } from '../../services/offers/offers.service';

@Injectable({
  providedIn: 'root'
})
export class GetOffersService {

	private offersService = inject(OffersService);

  public constructor() {}
	public getOffers(): Observable<MainOffers01[]> {
		const getMultibuys$: Observable<Multibuys> = this.offersService.getMultibuys();
		const getOccassions$: Observable<Occassions> = this.offersService.getOccasssions();
		const getSeasonal$: Observable<Seasonal> = this.offersService.getSeasonal();
		const combine00$: Observable<MainOffers01> = getMultibuys$.pipe(
			map(multibuys => ({
				id: multibuys.id,
				retail: multibuys.retail,
				slug: multibuys.slug,
				title: multibuys.title,
				image: multibuys.offer
			})));
		const combine01$: Observable<MainOffers01> = getOccassions$.pipe(
			map(multibuys => ({
				id: multibuys.id,
				retail: multibuys.retail,
				slug: multibuys.slug,
				title: multibuys.title,
				image: multibuys.image
			})));
		const combine02$: Observable<MainOffers01> = getSeasonal$.pipe(
			map(multibuys => ({
				id: multibuys.id,
				retail: multibuys.retail,
				slug: multibuys.slug,
				title: multibuys.title,
				image: multibuys.image
			})));
		const result00$ = merge(combine00$, combine01$, combine02$).pipe(toArray());	
		return result00$;
	}
}
