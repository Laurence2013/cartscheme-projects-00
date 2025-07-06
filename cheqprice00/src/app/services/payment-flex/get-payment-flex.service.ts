import { Injectable, inject } from '@angular/core';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { Bnpl } from '../../interfaces/payment-flex/bnpl.interface';
import { Giftcards } from '../../interfaces/payment-flex/giftcards.interface';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';

import { PaymentFlexService } from './payment-flex.service';
import { MainValueAddedService } from '../../services/helpers/main-value-added.service';

@Injectable({
  providedIn: 'root'
})
export class GetPaymentFlexService {

  public paymentFlexService = inject(PaymentFlexService);
  public mainValueAddedService = inject(MainValueAddedService);

  public constructor(){}
  public getPaymentFlex(){}
}
