import mongoose, { Document } from 'mongoose';
import { ICategory } from './category.interface';

export interface IRetailStore extends Document {
  name: string;
  description?: string;
  link?: string;
  categories: mongoose.Types.ObjectId[] | ICategory[];
}
