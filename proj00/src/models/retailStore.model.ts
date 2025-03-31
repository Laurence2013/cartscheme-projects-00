import mongoose, { Schema, Document } from 'mongoose';
import { IRetailStore } from '../interfaces/retailStore.interface';
import { ICategory } from '../interfaces/category.interface';

// Define the categorySchema and RetailStore schema
const categorySchema: Schema<ICategory> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
});
const retailStoreSchema: Schema<IRetailStore> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Retail shop name is required'],
    trim: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  description: { type: String, lowercase: true, trim: true },
  link: { type: String, trim: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // Reference to Category documents
});

// Create the RetailStore and Category model
const RetailStore = mongoose.models.RetailStore || mongoose.model<IRetailStore>('RetailStore', retailStoreSchema);
const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', categorySchema);

export { RetailStore, Category };

