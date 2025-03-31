import mongoose, { Document } from 'mongoose';

export interface IRetailStore extends Document {
  name: string;
  description?: string;
  link?: string;
  //categories: mongoose.Types.ObjectId[] | ICategory[];
}
