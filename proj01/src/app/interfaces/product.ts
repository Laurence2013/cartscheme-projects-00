import { Variety } from './variety';

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  category_id: number;
  seller_id: number;
  default_price: number | null;
  cut_price?: number | null;
  variety: Variety[];
  type: string;
}
