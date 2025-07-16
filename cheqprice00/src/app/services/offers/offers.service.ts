import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { Bundles } from '../../interfaces/offers/bundles.interface';
import { LimitedTime } from '../../interfaces/offers/limited-time.interface';
import { Multibuys } from '../../interfaces/offers/multibuys.interface';
import { Occassions } from '../../interfaces/offers/occassions.interface';
import { Seasonal } from '../../interfaces/offers/seasonal.interface';

/*import { bundles } from '../../mock-data/offers/bundles';
import { limitedTime } from '../../mock-data/offers/limited-time';
import { multibuys } from '../../mock-data/offers/multibuys';
import { occassions } from '../../mock-data/offers/occassions';
import { seasonal } from '../../mock-data/offers/seasonal';*/

import { FsOffersService } from '../../services/offers/fs-offers.service';

@Injectable({providedIn: 'root'})
export class OffersService {

  /*private getBundles00: Bundles[] = bundles;
  private getLimitedTime00: LimitedTime[] = limitedTime;
  private getMultibuys00: Multibuys[] = multibuys;
  private getOccasssions00: Occassions[] = occassions;
  private getSeasonal00: Seasonal[] = seasonal;*/

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
  /*public getBundles(){}
  public getLimitedTime(){}
  public getMultibuys(): Observable<Multibuys>{return from(this.getMultibuys00).pipe(take(2))}
  public getOccasssions(){return from(this.getOccasssions00).pipe(take(1))}
  public getSeasonal(){return from(this.getSeasonal00).pipe(take(2))}*/
}
