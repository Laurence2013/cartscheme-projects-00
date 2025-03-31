import mongoose, { Document, Types } from 'mongoose';
import { DiscountCategory } from '../utils/discountCategories';
import { DiscountRegion } from '../utils/discountRegions';

export interface IStaffDiscount extends Document {
	merchantName: string;
	description: string;
	discountLink: string;
	category: DiscountCategory;
	logoUrl?: string;
	region?: DiscountRegion;
	expiryDate?: Date;
	tags?: string[];
	isActive: boolean;
	lastCheckedDate: Date;
	createdAt?: Date;
	updatedAt?: Date;
}
