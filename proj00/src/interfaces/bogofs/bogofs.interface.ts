import mongoose, { Document } from 'mongoose';

export interface IBogofs extends Document {
	bogofName: string;
	description: string;
	bogofLink: string;
	offerType: 'Online offer only' | 'In shop offer only' | 'other';
	offerTypeOther?: string;
}
