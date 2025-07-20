import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';

import { FsValueAddedService } from './fs-value-added.service';

import { cashbacks } from '../../mock-data/value-added/cashbacks';
import { loyalty } from '../../mock-data/value-added/loyalty';
import { vouchers } from '../../mock-data/value-added/vouchers';

@Injectable({
  providedIn: 'root'
})
export class ValueAddedService {

  private getCashbacks00: Cashbacks[] = cashbacks;
  private getLoyalty00: Loyalty[] = loyalty;
  private getVouchers00: Vouchers[] = vouchers;

  public constructor(private fsValueAddedService: FsValueAddedService){}
  public getCashbacks(): Observable<DocumentData> {
    const test00$ = from(this.fsValueAddedService.getFsValueAdded('value-added', 'cashbacks').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2)))));
    return test00$;
  }
  public getLoyalty(): Observable<DocumentData> {
    const test00$ = from(this.fsValueAddedService.getFsValueAdded('value-added', 'loyalty').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2)))));
    return test00$;
  }
  public getVouchers(): Observable<DocumentData> {
    const test00$ = from(this.fsValueAddedService.getFsValueAdded('value-added', 'vouchers').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(1)))));
    return test00$;
  }
  public getCashbacks000(){return from(this.getCashbacks00).pipe(take(2))}
  public getLoyalty000(){return from(this.getLoyalty00).pipe(take(2))}
  public getVouchers000(){return from(this.getVouchers00).pipe(take(1))}
}
