import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../interfaces/value-added/vouchers.interface';

import { FsValueAddedService } from './fs-value-added.service';

@Injectable({
  providedIn: 'root'
})
export class ValueAddedService {

  public constructor(private fsValueAddedService: FsValueAddedService){}
  public getCashbacks(): Observable<DocumentData> {
    return from(this.fsValueAddedService.getFsValueAdded('value-added', 'cashbacks').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2)))));
  }
  public getLoyalty(): Observable<DocumentData> {
    return from(this.fsValueAddedService.getFsValueAdded('value-added', 'loyalty').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2)))));
  }
  public getVouchers(): Observable<DocumentData> {
    return from(this.fsValueAddedService.getFsValueAdded('value-added', 'vouchers').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(1)))));
  }
}
