import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { Cashbacks } from '../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../interfaces/value-added/vouchers.interface';

import { cashbacks } from '../mock-data/value-added/cashbacks';
import { loyalty } from '../mock-data/value-added/loyalty';
import { vouchers } from '../mock-data/value-added/vouchers';

@Injectable({
  providedIn: 'root'
})
export class ValueAddedService {

  private getCashbacks00: Cashbacks[] = cashbacks;
  private getLoyalty00: Loyalty[] = loyalty;
  private getVouchers00: Vouchers[] = vouchers;

  public constructor(){}
  public getCashbacks(){
    return from(this.getCashbacks00).pipe(take(2));
  }
  public getLoyalty(){
    return from(this.getLoyalty00).pipe(take(2));
  }
  public getVouchers(){
    return from(this.getVouchers00).pipe(take(1));
  }
}
