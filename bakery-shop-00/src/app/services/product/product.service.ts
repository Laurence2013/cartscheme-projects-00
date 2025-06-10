import { Injectable } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { Category } from '../../interfaces/category.interface';
import { Seller } from '../../interfaces/seller.interface';
import { ProductDetail } from '../../interfaces/product-detail';

import { products } from '../../dummy-data/products';
import { categories } from '../../dummy-data/categories';
import { sellers } from '../../dummy-data/sellers';
import { ProductDetailPage } from 'src/app/pages/tabs/product-detail/product-detail.page';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public constructor(){}
  public getProducts(): Product[] {
    return products;
  }
  public getProductId(id: number): ProductDetail {
    const product = products.find(product => product.id === id);
    if (product) {
      const seller = sellers.find(seller => seller.id === product!.seller_id);
      const category = categories.find(category => category.id === product!.category_id);
      
      return {data: {...product, seller, category}};
    }
    return {data: null}
  }
}
