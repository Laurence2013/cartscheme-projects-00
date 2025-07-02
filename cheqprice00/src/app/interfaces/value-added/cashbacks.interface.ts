import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';

export interface Cashbacks extends BaseInterface00 {
	is_Type: string,
	image: string,
	percent_back00?: number,
	percent_back01?: number,
	percent_back02?: number
};

// Percentage back is what retails store give back in cash depending on what you spend on.
