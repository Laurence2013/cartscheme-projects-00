import mongoose, { Schema, Document } from 'mongoose';
import { IRetailStore } from '../interfaces/retailStore.interface';

// Define the and RetailStore schema
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
  // categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // Reference to Category documents
});

// Create the RetailStore model
const RetailStore = mongoose.models.RetailStore || mongoose.model<IRetailStore>('RetailStore', retailStoreSchema);

export { RetailStore };

