import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable, ObservableInput, of, from, EMPTY } from 'rxjs';
import { tap, map, take, switchMap } from 'rxjs/operators';

import { General } from '../../interfaces/discounts/general.interface';
import { Student } from '../../interfaces/discounts/student.interface';
import { Staff } from '../../interfaces/discounts/staff.interface';

import { top_general_discounts } from '../../mock-data/discounts/top-general-discounts';
import { staff_discounts } from '../../mock-data/discounts/staff-discounts';
import { student_discounts } from '../../mock-data/discounts/student-discounts';

import { FirestoreData00Service } from '../../services/firestore/firestore-data00.service';
import { FsDiscountsService } from '../../services/discounts/fs-discounts.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {
  private genDiscounts: General[] = top_general_discounts;
  private staffDiscounts: Staff[] = staff_discounts;
  private studentDiscounts: Student[] = student_discounts;

  public constructor(
    private firestoreDataService: FirestoreData00Service, 
    private fsDiscountsServices: FsDiscountsService
  ){}
  public getGeneralDiscounts00(): Observable<General> {
    return from(this.genDiscounts).pipe(take(3));
  }
  public getStaffDiscounts00(): Observable<Staff> {
    return from(this.staffDiscounts).pipe(take(2));
  }
  public getGeneralDiscounts01(): Observable<DocumentData> {
    return this.fsDiscountsServices.getDiscounts01('discounts', 'general-discounts').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(3))));
  }
  public getStaffDiscounts01(): Observable<DocumentData> {
    return this.fsDiscountsServices.getDiscounts01('discounts', 'staff-discounts').pipe(
      switchMap((data00: ObservableInput<DocumentData>) => from(data00).pipe(take(2))));
  }
}
