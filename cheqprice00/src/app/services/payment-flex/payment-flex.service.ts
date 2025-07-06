import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { Bnpl, BnplInfo } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';

import { bnpl } from '../../mock-data/payment-flex/bnpl';
import { giftcards } from '../../mock-data/payment-flex/giftcards';

@Injectable({
  providedIn: 'root'
})
export class PaymentFlexService {

  public getBnpl00: Bnpl[] = bnpl;
  public getGiftcards00: Giftcards[] = giftcards;

  public constructor(){}
  public getBnpl(){return from(this.getBnpl00).pipe(take(2))}
  public getGiftcards(){return from(this.getGiftcards00).pipe(take(3))}
}
