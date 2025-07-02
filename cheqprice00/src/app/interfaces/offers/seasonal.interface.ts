export interface Seasonal {
	id: number,
  is_top_5: 'Yes' | 'No',
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
