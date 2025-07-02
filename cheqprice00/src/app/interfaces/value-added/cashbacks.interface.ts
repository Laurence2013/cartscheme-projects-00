import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';

export interface Cashbacks extends BaseInterface00 {
	partner_site?: string,
	percent_back00?: number,
	percent_back01?: number,
	percent_back02?: number
};


/*export interface Cashbacks {
	id: number,
	is_top_5: 'Yes' | 'No',
	retail: string,
	slug: string,
	link: string,
	image: string,
	partner_site?: string,
	percent_back00?: number,
	percent_back01?: number,
	percent_back02?: number,
	date: Date
}*/

// Percentage back is what retails store give back in cash depending on what you spend on.
