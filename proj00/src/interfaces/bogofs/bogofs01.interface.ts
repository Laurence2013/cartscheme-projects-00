import mongoose, { Document } from 'mongoose';

interface IBogofsBase extends Document {
	bogofName: string;
	description: string;
	bogofLink: string;
};
interface IStandardBogof extends IBogofsBase {
	offerType: 'ONLINE_ONLY' | 'IN_SHOP_ONLY';
	offerTypeOther?: never;
};
interface IOtherBogof extends IBogofsBase {
	offerType: 'OTHER';
	offerTypeOther: string;
};
export type IBogofs = IStandardBogof | IOtherBogof;
