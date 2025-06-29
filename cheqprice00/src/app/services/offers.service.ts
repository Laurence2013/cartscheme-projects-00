import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { Bundles } from '../interfaces/offers/bundles.interface';
import { LimitedTime } from '../interfaces/offers/limited-time.interface';
import { Multibuys } from '../interfaces/offers/multibuys.interface';
import { Occassions } from '../interfaces/offers/occassions.interface';
import { Seasonal } from '../interfaces/offers/seasonal.interface';

import { bundles } from '../mock-data/offers/bundles';
import { limitedTime } from '../mock-data/offers/limited-time';
import { multibuys } from '../mock-data/offers/multibuys';
import { occassions } from '../mock-data/offers/occassions';
import { seasonal } from '../mock-data/offers/seasonal';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private getBundles00: Bundles[] = bundles;
  private getLimitedTime00: LimitedTime[] = limitedTime;
  private getMultibuys00: Multibuys[] = multibuys;
  private getOccasssions00: Occassions[] = occassions;
  private getSeasonal00: Seasonal[] = seasonal;

  public constructor(){}
  public getBundles(){}
  public getLimitedTime(){}
  public getMultibuys(): Observable<Multibuys>{
    return from(this.getMultibuys00).pipe(take(2));
  }
  public getOccasssions(){
    return from(this.getOccasssions00).pipe(take(1))
  }
  public getSeasonal(){
    return from(this.getSeasonal00).pipe(take(2))
  }
}
