import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { Bundles } from '../../interfaces/offers/bundles.interface';
import { LimitedTime } from '../../interfaces/offers/limited-time.interface';
import { Multibuys } from '../../interfaces/offers/multibuys.interface';
import { Occassions } from '../../interfaces/offers/occassions.interface';
import { Seasonal } from '../../interfaces/offers/seasonal.interface';

import { FsOffersService } from '../../services/offers/fs-offers.service';

@Injectable({providedIn: 'root'})
export class OffersService {

  public constructor(private fsOffersService: FsOffersService){}
  public getMultibuys00(): Observable<DocumentData> {
    const test00$ = from(this.fsOffersService.getOffers('offers', 'multibuys').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(3)))))
    return test00$;
  }
  public getSeasonal00(): Observable<DocumentData> {
    const test00$ = from(this.fsOffersService.getOffers('offers', 'seasonal').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2)))));
    return test00$;
  }
  public getOccassions00(){
    const test00$ = from(this.fsOffersService.getOffers('offers', 'occassions').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(1)))));
    return test00$;
  }
}
