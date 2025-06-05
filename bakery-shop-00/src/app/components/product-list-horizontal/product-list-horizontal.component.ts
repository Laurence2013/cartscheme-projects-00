import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, input } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductComponent } from '../product/product.component';

import { IonicSlides } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-list-horizontal',
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.scss'],
  imports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListHorizontalComponent implements OnInit {

  public products = input<Product[]>();
  public swiperModules = [IonicSlides]

  public constructor(){}
  public ngOnInit(){}
}
