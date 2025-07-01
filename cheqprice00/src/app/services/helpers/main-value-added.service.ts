import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

@Injectable({
  providedIn: 'root'
})
export class MainValueAddedService {

  public constructor(){}
  public mainValueAdded(mainVal: Observable<MainValueAdded00>): Observable<MainValueAdded00[]> {
    return any;
  }
}
