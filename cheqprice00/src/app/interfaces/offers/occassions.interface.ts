export interface Occassions {
	id: number,
  is_top_5: 'Yes' | 'No',
	retail: string,
	slug: string,
	title: string,
	description: string,
	type: 
		'Birthday' | 'Christmas' | "Valentine's Day" | 
		'Fathers Day' | 'Mothers Day' | 'Halloween' | 'Others',
	link: string,
	image: string,
	terms_n_conditions: string,
	date_expire: Date
}
