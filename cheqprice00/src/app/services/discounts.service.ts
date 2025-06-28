import { Injectable } from '@angular/core';

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

  public constructor(){}
}
