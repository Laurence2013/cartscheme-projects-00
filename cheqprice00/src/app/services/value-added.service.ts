import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { Cashback } from '../interfaces/value-added/cashback.interface';
import { Loyalty, Type } from '../interfaces/value-added/loyalty.interface';
import { Voucher } from '../interfaces/value-added/voucher.interface';

import { cashback } from '../mock-data/value-added/cashback';
import { loyalty } from '../mock-data/value-added/loyalty';
import { voucher } from '../mock-data/value-added/voucher';

@Injectable({
  providedIn: 'root'
})
export class ValueAddedService {

  public constructor(){}
}
