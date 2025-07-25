import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoadingService {

  private _isLoading$ = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._isLoading$.asObservable();

  public constructor(){}
  public show(){return this._isLoading$.next(true)}
  public hide(){return this._isLoading$.next(false)}
}
