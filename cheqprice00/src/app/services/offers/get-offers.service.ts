import { Injectable, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

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

  public constructor(){}
	public getOffers(): Observable<MainOffers01[]> {
		const getMultibuys$: Observable<DocumentData> = this.offersService.getMultibuys00();
		const getOccassions$: Observable<DocumentData> = this.offersService.getSeasonal00();
		const getSeasonal$: Observable<DocumentData> = this.offersService.getOccassions00();
		
		const combine00$: Observable<MainOffers01> = getMultibuys$.pipe(
			map(multibuys => ({
				id: multibuys['id'],
				is_top_5: multibuys['is_top_5'],
				retail: multibuys['retail'],
				slug: multibuys['slug'],
				title: multibuys['title'],
				image: multibuys['offer']
			})));
		const combine01$: Observable<MainOffers01> = getOccassions$.pipe(
			map(multibuys => ({
				id: multibuys['id'],
				is_top_5: multibuys['is_top_5'],
				retail: multibuys['retail'],
				slug: multibuys['slug'],
				title: multibuys['title'],
				image: multibuys['image']
			})));
		const combine02$: Observable<MainOffers01> = getSeasonal$.pipe(
			map(multibuys => ({
				id: multibuys['id'],
				is_top_5: multibuys['is_top_5'],
				retail: multibuys['retail'],
				slug: multibuys['slug'],
				title: multibuys['title'],
				image: multibuys['image']
			})));
		const result00$ = merge(combine00$, combine01$, combine02$).pipe(toArray());	
		return result00$;
	}
}
