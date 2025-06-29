export interface Seasonal {
	id: number,
	retail: string,
	slug: string,
	title: string,
	description: string,
	type: 'Autumn' | 'Winter' | 'Spring' | 'Summer',
	link: string,
	image: string,
	terms_n_conditions: string,
	date_expire: Date
}
