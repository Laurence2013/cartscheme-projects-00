import { Injectable } from '@angular/core';

import { Observable, of, iif, mergeMap, EMPTY } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';

import { Bnpl } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';

import { FsMainQuery01Service } from './fs-main-query01.service';

@Injectable({
  providedIn: 'root'
})
export class MainPaymentFlexService {

  public constructor(private fsMainQuery01Service: FsMainQuery01Service){}
  public mainPaymentFlex(
    getBnpl$: Observable<Bnpl>,
    getGiftcards$: Observable<Giftcards>,
    valueType: string
  ): Observable<PaymentFlex00> {
    type Test00$ = Observable<Bnpl | Giftcards>;

    if(valueType === 'bnpl'){
      return this.getMainPaymentFlex(getBnpl$, valueType, this.getBnpl, this.fsMainQuery01Service.get_IIF);
    };
    if(valueType === 'giftcards'){
      return this.getMainPaymentFlex(getGiftcards$, valueType, this.getGiftcards, this.fsMainQuery01Service.get_IIF);
    };
    return EMPTY;
  }
  private getMainPaymentFlex(
    getBnpl_Giftcards$: Observable<Bnpl | Giftcards>,
    valueType: string,
		functionType: (obs00: Observable<boolean>, obs01: Observable<any>) => Observable<PaymentFlex00>,
		get_iif$: (obs02: Observable<boolean>, obs03: Observable<any>) => Observable<any> 
  ): Observable<PaymentFlex00> {
    type Test00$ = Observable<Bnpl | Giftcards>;

    const test01$ = (test00$: Test00$) => test00$.pipe(map(test01 => test01.is_Type === valueType));
    const test02$ = test01$(getBnpl_Giftcards$).pipe(
      take(1),
      mergeMap((value: boolean) => iif(
        () => value === true,
        functionType(test01$(getBnpl_Giftcards$), getBnpl_Giftcards$ as Test00$),
        EMPTY
      )));
    const test03$ = get_iif$(test01$(getBnpl_Giftcards$),test02$) as Observable<PaymentFlex00>;
    return test03$;
  }
  public getBnpl(test00$: Observable<boolean>, getPaymentFlex$: Observable<Bnpl>): Observable<PaymentFlex00> {
    const combine00$: Observable<PaymentFlex00> = getPaymentFlex$.pipe(
    map((cashbacks: Bnpl) => ({
      is_Type: cashbacks.is_Type,
      id: cashbacks.id,
      is_top_5: cashbacks.is_top_5,
      retail: cashbacks.retail,
      slug: cashbacks.slug,
      bnpl_info: cashbacks.bnpl_info,
      link: cashbacks.link,
      date: cashbacks.date
    })));
    return combine00$
  }
  public getGiftcards(test00$: Observable<boolean>, getPaymentFlex$: Observable<Giftcards>): Observable<PaymentFlex00> {
    const combine00$: Observable<PaymentFlex00> = getPaymentFlex$.pipe(
      map((giftcards: Giftcards) => ({
        is_Type: giftcards.is_Type,
        id: giftcards.id,
        is_top_5: giftcards.is_top_5,
        retail: giftcards.retail,
        slug: giftcards.slug,
        link: giftcards.link,
        image: giftcards.image,
        website: giftcards.website,
        description: giftcards.description,
        choosing_type: giftcards.choosing_type,
        gift_values: giftcards.gift_values,
        quantity: giftcards.quantity,
        availability: giftcards.availability,
        valid_to: giftcards.valid_to,
        date: giftcards.date
      })));
    return combine00$;
  }
}
