import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

@Injectable({
  providedIn: 'root'
})
export class MainValueAddedService {

  public constructor(){}
  public mainValueAdded(getDiscount$: Observable<Cashbacks | Loyalty | Vouchers>): Observable<MainValueAdded00> {

		const combine00$: Observable<MainValueAdded00> = getDiscount$.pipe(
			map(discount => ({
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
}
