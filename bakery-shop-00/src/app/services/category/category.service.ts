import { Injectable } from '@angular/core';

import { categories } from '../../dummy-data/categories';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public constructor(){}
  public getCategories(): Category[] {
    return categories
  }
}
