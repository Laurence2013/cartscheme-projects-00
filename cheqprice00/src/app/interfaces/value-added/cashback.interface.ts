export interface Cashback {
	id: number,
	retail: string,
	partner_site: string,
	slug: string,
	image: string,
	are_partners: 'Yes' | 'No',
	link: string,
	date: Date
}
