import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { FsDiscountsService } from '../../services/discounts/fs-discounts.service';

@Injectable({providedIn: 'root'})
export class DiscountsService {

  public constructor(private fsDiscountsServices: FsDiscountsService){}
  public getGeneralDiscounts01(): Observable<DocumentData> {
    return from(this.fsDiscountsServices.getDiscounts01('discounts', 'general-discounts').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(3)))));
  }
  public getStaffDiscounts01(): Observable<DocumentData> {
    return this.fsDiscountsServices.getDiscounts01('discounts', 'staff-discounts').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2))));
  }
}
