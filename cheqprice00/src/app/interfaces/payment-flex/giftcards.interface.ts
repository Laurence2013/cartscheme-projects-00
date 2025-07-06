import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';

export interface Giftcards extends BaseInterface00 {
	image: string;
	website: string;
	description: string;
	choosing_type: 'Myself' | 'Someone else'
	gift_values: number[];
	quantity: number[];
	availability: 'eCard' | 'Physical' | 'Both';
	valid_to: Date;
}
