import mongoose, { Document } from 'mongoose';

export enum OfferType {
	Online 	= 'ONLINE_ONLY',
	InShop 	= 'In_SHOP_ONLY',
	Other		= 'OTHER'
};
export interface IBogofs extends Document {
	bogofName: string;
	description: string;
	bogofLink: string;
	//offerType: 'Online offer only' | 'In shop offer only' | 'other';
	offerType: OfferType;
	offerTypeOther?: string;
};
