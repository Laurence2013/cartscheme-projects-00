import { Injectable, inject } from '@angular/core';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { Bnpl } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { PaymentFlex00, PaymentFlex01 } from '../../interfaces/payment-flex/payment-flex00.interface';

import { PaymentFlexService } from './payment-flex.service';
import { MainPaymentFlexService } from '../../services/helpers/main-payment-flex.service';

@Injectable({providedIn: 'root'})
export class GetPaymentFlexService {

  public paymentFlexService = inject(PaymentFlexService);
  public mainPaymentFlexService = inject(MainPaymentFlexService);

  public constructor(){}
  public getPaymentFlex(): Observable<PaymentFlex01[]> {
		const getCashbacks$: Observable<Bnpl> = this.paymentFlexService.getBnpl();
    const getGiftCards$: Observable<Giftcards> = this.paymentFlexService.getGiftcards();

		const test00$: Observable<PaymentFlex00> = this.mainPaymentFlexService.mainPaymentFlex(getCashbacks$, EMPTY, 'bnpl');
		const test01$: Observable<PaymentFlex00> = this.mainPaymentFlexService.mainPaymentFlex(EMPTY, getGiftCards$, 'giftcards');
    const result00$: Observable<PaymentFlex01[]> = merge(
      test00$.pipe(map(val00 => ({type: val00.is_Type, info: val00}))), 
      test01$.pipe(map(val00 => ({type: val00.is_Type, info: val00})))
    ).pipe(
      toArray(),
      map(val00 => val00.map((val: any) => ({type: val.type, info: val.info})))
    );
    //result00$.subscribe(console.log);
    return result00$;
  }
}
