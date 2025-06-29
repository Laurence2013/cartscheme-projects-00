import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { General } from '../interfaces/discounts/general.interface';
import { Student } from '../interfaces/discounts/student.interface';
import { Staff } from '../interfaces/discounts/staff.interface';

import { top_general_discounts } from '../mock-data/discounts/top-general-discounts';
import { staff_discounts } from '../mock-data/discounts/staff-discounts';
import { student_discounts } from '../mock-data/discounts/student-discounts';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {
  private genDiscounts: General[] = top_general_discounts;
  private staffDiscounts: Staff[] = staff_discounts;
  private studentDiscounts: Student[] = student_discounts;

  public constructor(){}
  public getGeneralDiscounts(): Observable<General> {
    return from(this.genDiscounts).pipe(take(3));
  }
  public getStaffDiscounts(): Observable<Staff> {
    return from(this.staffDiscounts).pipe(take(2));
  }
}
