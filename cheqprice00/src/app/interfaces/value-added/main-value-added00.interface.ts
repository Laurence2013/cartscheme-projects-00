import { Type } from './loyalty.interface';

export interface MainValueAdded00 {
	id: number,
	is_top_5: 'Yes' | 'No',
	retail: string,
	slug: string,
	image: string,
	link?: string,
	partner_site?: string,
	percent_back00?: number,
	percent_back01?: number,
	percent_back02?: number,
	type01?: Type[],
	describe00?: string,
	describe01?: string,
	describe02?: string,
	describe03?: string,
	describe04?: string,
	describe05?: string,
	describe06?: string,
	describe07?: string,
	describe08?: string,
	describe09?: string,
	description?: string,
	type00?: 'spend_in_store' | 'click_and_collect',
	date: Date
}
