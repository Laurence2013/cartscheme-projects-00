export interface Cashback {
	id: number,
	retail: string,
	partner_site: string,
	slug: string,
	image: string,
	percent_back00: number,
	percent_back01?: number,
	percent_back02?: number,
	link: string,
	date: Date
}
