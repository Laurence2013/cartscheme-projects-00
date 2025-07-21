import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { Bnpl, BnplInfo } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';

import { bnpl } from '../../mock-data/payment-flex/bnpl';
import { giftcards } from '../../mock-data/payment-flex/giftcards';

import { FsPaymentFlexService } from './fs-payment-flex.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentFlexService {

  public getBnpl00: Bnpl[] = bnpl;
  public getGiftcards00: Giftcards[] = giftcards;

  public constructor(private fsPaymentFlexService: FsPaymentFlexService){}
  public getBnpl(): Observable<DocumentData> {
    const test00$ = from(this.fsPaymentFlexService.getFsValueAdded('payment-flex', 'bnpl').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2)))));
    return EMPTY;
  }
  public getGiftcards(): Observable<DocumentData> {
    return EMPTY;
  }
  public getBnpl01(){return from(this.getBnpl00).pipe(take(2))}
  public getGiftcards01(){return from(this.getGiftcards00).pipe(take(3))}
}
