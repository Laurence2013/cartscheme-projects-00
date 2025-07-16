import { Injectable, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

import { ValueAddedService } from '../../services/value-added/value-added.service';
import { MainValueAddedService } from '../../services/helpers/main-value-added.service';
import { FsValueAddedService } from './fs-value-added.service';

@Injectable({
  providedIn: 'root'
})
export class GetValueAddedService {

	private valueAddedService = inject(ValueAddedService);
	private mainValueAddedService = inject(MainValueAddedService);

  public constructor(){}
	public getValueAdded(): Observable<MainValueAdded00[]> {
		const getCashbacks$: Observable<DocumentData> = this.valueAddedService.getCashbacks();
		//const getLoyalty$: Observable<Loyalty> = this.valueAddedService.getLoyalty();
		//const getVouchers$: Observable<Vouchers> = this.valueAddedService.getVouchers();

		const test00$ = this.mainValueAddedService.mainValueAdded02(getCashbacks$, 'Cashbacks');
		//const test00$ = this.mainValueAddedService.mainValueAdded01(getCashbacks$, EMPTY, EMPTY, 'Cashbacks');
		//const test01$ = this.mainValueAddedService.mainValueAdded01(EMPTY, getLoyalty$, EMPTY, 'Loyalty');
		//const test02$ = this.mainValueAddedService.mainValueAdded01(EMPTY, EMPTY, getVouchers$, 'Vouchers');
		//const result00$ = merge(test00$, test01$, test02$).pipe(toArray());	
		const result00$ = merge(test00$).pipe(toArray());	
		return result00$;
	}
}
