import { Injectable, inject } from '@angular/core';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { Bnpl } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';

import { PaymentFlexService } from './payment-flex.service';
import { MainPaymentFlexService } from '../../services/helpers/main-payment-flex.service';

@Injectable({
  providedIn: 'root'
})
export class GetPaymentFlexService {

  public paymentFlexService = inject(PaymentFlexService);
  public mainPaymentFlexService = inject(MainPaymentFlexService);

  public constructor(){}
  public getPaymentFlex(): Observable<PaymentFlex00> {
		const getCashbacks$: Observable<Bnpl> = this.paymentFlexService.getBnpl();
    const getGiftCards$: Observable<Giftcards> = this.paymentFlexService.getGiftcards();

		const test00$ = this.mainPaymentFlexService.mainPaymentFlex(getCashbacks$, EMPTY, 'Bnpl');
		const test01$ = this.mainPaymentFlexService.mainPaymentFlex(EMPTY, getGiftCards$, 'Giftcards`');

    return EMPTY;
  }
}
