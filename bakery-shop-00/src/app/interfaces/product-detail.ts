import { Product } from "./product.interface";
import { Category } from "./category.interface";
import { Seller } from "./seller.interface";

export interface ProductDetail {
  data: (Product & {seller?: Seller, category?: Category}) | null;
}
