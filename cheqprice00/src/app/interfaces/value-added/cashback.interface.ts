export interface Cashback {
	id: number,
	is_top_5: 'Yes' | 'No',
	retail: string,
	slug: string,
	partner_site: string,
	link: string,
	image: string,
	percent_back00: number,
	percent_back01?: number,
	percent_back02?: number,
	date: Date
}

// Percentage back is what retails store give back in cash depending on what you spend on.
