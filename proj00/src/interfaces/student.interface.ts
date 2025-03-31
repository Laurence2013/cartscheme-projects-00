import mongoose { Document } from 'mongoose';

export interface IStudent extends Document {
	merchantName: string;
	description: string;
	discountLink: string;
	category: [];
	logoUrl: string;
	region: [];
}
